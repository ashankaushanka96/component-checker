import { Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import "./ComponentItem.css";
import { useSpeechSynthesis } from "react-speech-kit";


function ComponentItem(props) {
  const [holidayState, setHolidayState] = useState("notAHoliday");
  const { speak } = useSpeechSynthesis();
  const nowTime = new Date().getTime();
  const startTime = new Date("July 20, 69 20:17:40 GMT+00:00");
  const tenSecTime = Math.floor((nowTime - startTime) / (10 * 1000));
  const speakHandler = (word) => {
    const value = props.name + " " + word;
    speak({ text: value });

  };
  useEffect(() => {
    if (props.status === "notRunning" && holidayState !== "holiday") {
      speakHandler("Not working");
    }
  }, [props.status, holidayState, props.name, tenSecTime]);

  useEffect(() => {
    if (props.status === "running") {
      speakHandler("Started");
    }
  }, [props.status]);

  const analyserItemClassName = () => {
    if (holidayState === "holiday") {
      return "analyser-item holiday";
    }
    if (props.status === "notRunning") {
      return "analyser-item notRunning";
    }
    if (props.status === "running") {
      return "analyser-item running";
    }
    if (props.status === "Not Started") {
      return "analyser-item notStarted";
    }
    if (props.status === "Holiday") {
      return "analyser-item notRunForDay";
    }
    return "analyser-item";
  };
  useEffect(() => {
    const storedHolidayState = localStorage.getItem(props.id);
    setHolidayState(storedHolidayState);

  }, []);

  const onClick = ({ key }) => {
    localStorage.setItem(props.id, key);
    setHolidayState(key);
    if (key === "holiday") {
      speakHandler("on Processing");
    } else {
      speakHandler("Fixed");
    }
  };

  const items = [
    { label: "PROCESSING", key: "holiday" },
    { label: "FIXED", key: "notAHoliday" },
  ];
  // return (
  //   <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]} >
  //     <div className={analyserItemClassName()}>
  //       <div className="analyser-name">
  //         <h2>{props.name}</h2>
  //       </div>
  //       <hr/>
  //       <div className="analyser-status">
  //         <h3>{props.ip}</h3>
  //       </div>
  //       <div className="analyser-status">
  //         <h3>{props.status}</h3>
  //       </div>
  //     </div>
  //   </Dropdown>
  // );
  return (
    <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]} >
      <div className="wrapper">
        <div className="upper">
          <p>{props.name}</p>
        </div>
        <div className="mid">
          <div className="mid-left">
          <p>Process Status</p>
            <p>{props.process_status}</p>
          </div>
          <div className="mid-right">
            <p>Port Status</p>
            <p>{props.port_status}</p>
          </div>
        </div>
        <div className="lower">
          <div className="lower-left">
            <p>uptime : {props.startTime}</p>
            <p>downtime : {props.endTime}</p>
            <p>run dates : {props.runninngDates}</p>
          </div>
          <div className="lower-right">
            <p>IP:{props.ip}</p>
            <p>Port:{props.port}</p>
          </div>
        </div>
      </div>
    </Dropdown>
  );

}

export default ComponentItem;
