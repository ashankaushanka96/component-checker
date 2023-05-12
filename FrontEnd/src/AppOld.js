import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body/Body";
import SideNav from "./components/side-nav/SideNav";
import TopNav from "./components/top-nav/TopNav";
import configData from "./config.json";
import { FilterContextProvider } from "./store/filter-context";

function App() {
  const [analyserData, setAnalyserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const newSocket = new WebSocket('ws://192.168.1.7:8000');
    newSocket.onopen = () => {
      console.log('WebSocket connected')
      setIsLoading(false)
    };
    newSocket.onmessage = event => {
      const data = JSON.parse(event.data);
      const transFormedData = data.result.map((analyser) => {
        return {
          id: analyser.id,
          name: analyser.name,
          ip: analyser.ip,
          status: analyser.status,
        };
      });
      setAnalyserData(transFormedData)
      console.log(event.data)
      setError(null);
    };
    newSocket.onerror = () => {
      console.log('WebSocket Close')
      setIsLoading(true)
    };
    newSocket.onclose = () => {
      console.log('WebSocket Close')
      setIsLoading(true)
    };
    
    } catch (error) {
      setError(error.message);
      console.log(error.message)
    }
    
  }, []);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // async function fetchDataHandler() {
  //   // setIsLoading(true);

  //   try {
  //     const response = await fetch(configData.TEST_API_URL);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
      // const transFormedData = data.result.map((analyser) => {
      //   return {
      //     id: analyser.id,
      //     name: analyser.name,
      //     ip: analyser.ip,
      //     status: analyser.status,
      //   };
      // });
  //     setAnalyserData(transFormedData);
  //     setError(null);
    // } catch (error) {
    //   setError(error.message);
    // }
    // setIsLoading(false);
  // }


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchDataHandler();
  //   }, 10000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <FilterContextProvider>
      <div className="app">
        <TopNav></TopNav>
        <div className="down">
          <SideNav/>
          <Body
            error={error}
            setError={setError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            analyserData={analyserData}
          />
        </div>
      </div>
    </FilterContextProvider>
  );
}

export default App;
