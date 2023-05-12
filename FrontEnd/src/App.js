import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Body from "./components/body/Body";
import NotificationHandler from "./components/NotificationHandler";
import SideNav from "./components/side-nav/SideNav";
import TopNav from "./components/top-nav/TopNav";
import configData from "./config.json";
import { FilterContextProvider } from "./store/filter-context";
import NotificationSound from "./beep-warning.mp3";

function App() {
  const [componentData, setComponentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [change, setChange] = useState(true);
  const [categoryStatusDict, setCategoryStatusDict] = useState({});
  const [selectedProcessStatus, setSelectedProcessStatus] = useState("Started");
  const audioPlayer = useRef(null);
  const [play, setPlay] = useState(false);

  function playAudio() {
      audioPlayer.current.play();
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (Object.keys(categoryStatusDict).length !== 0){
        playAudio();
      }
    }, 5000);
    return () => {
      playAudio();
      clearInterval(interval)};
  }, [Object.keys(categoryStatusDict).length]);
  useEffect(() => {
    const newSocket = new WebSocket(`ws://${configData.TEST_API_URL}:8000`);
    newSocket.onopen = () => {
      console.log('WebSocket connected')
      setError(null);
      setIsLoading(false)
    };
    newSocket.onmessage = event => {
      const data = JSON.parse(event.data);
      const transFormedData = data.result.map((component) => {
        return {
          ip: component.ip,
          id: component.id,
          category: component.category,
          name: component.name,
          process_status: component.process_status,
          port: component.port,
          port_status: component.port_status,
          startTime: component.startTime,
          endTime: component.endTime,
          runninngDates: component.runninngDates,
          uptime:component.uptime
        };
      });
      setComponentData(transFormedData)
    };
    newSocket.onerror = () => {
      console.log('WebSocket Error');
      setIsLoading(true);
      setChange(!change);
    };
    newSocket.onclose = () => {
      console.log('WebSocket Close');
      setIsLoading(true);
      setChange(!change);
    };
  }, [change]);
  
  return (
    <FilterContextProvider>
      <div className="app">
        <div className="top">
        <TopNav selectedProcessStatus={selectedProcessStatus} setSelectedProcessStatus={setSelectedProcessStatus}></TopNav>
        </div>     
        <div className="down">
          <SideNav categoryStatusDict={categoryStatusDict}/>
          <NotificationHandler componentData = {componentData}  setCategoryStatusDict = {setCategoryStatusDict}/>
          <audio ref={audioPlayer} src={NotificationSound} />
          <Body
            error={error}
            setError={setError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            componentData={componentData}
            setChange = {setChange}
            selectedProcessStatus={selectedProcessStatus}
          />
        </div>
      </div>
    </FilterContextProvider>
  );
}

export default App;
