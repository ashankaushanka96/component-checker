import React, { useState } from 'react'
import './TableData.css'
import { Dropdown } from "antd";
import UPTimeCounter from "./UPTimeCounter";
import { BsVolumeUpFill } from 'react-icons/bs'
import { BsVolumeMuteFill } from 'react-icons/bs'

function TableData(props) {
  const [state, setState] = useState(localStorage.getItem(props.id));
  // const [mute, setMute] = useState()

  const onClick = ({ key }) => {
    localStorage.setItem(props.id, key);
    setState(key);
    props.setChange(true)
  };

  const onClickVolumeUP = () => {
    localStorage.setItem(props.id, 'processing');
    setState('processing');
    props.setChange(true)
  };

  const onClickVolumeMute = () => {
    localStorage.setItem(props.id, 'fixed');
    setState('fixed');
    props.setChange(true)
  };
  const items = [
    { label: "PROCESSING", key: "processing" },
    { label: "FIXED", key: "fixed" },
  ];

  // if ((props.process_status === 'running') && (props.port_status === 'open')) {
  //   localStorage.setItem(props.id, 'fixed');
  // }

  const runninngDatesCalculator = () => {
    if (props.runninngDates === '[0,1,2,3,4]') {
      return 'Sunday-Thursday';
    } else if (props.runninngDates === '[1,2,3,4,5]') {
      return 'Monday-Friday';
    } else if (props.runninngDates === '[0,1,2,3,4,5,6]') {
      return 'Everyday';
    } else {
      return props.runninngDates;
    }
  }
  return (
    
      <tr className={localStorage.getItem(props.id) === 'processing' ? 'row-yellow' : (props.process_status === 'notRunning') || (props.port_status === 'notOpen') ? 'row-blink' : (props.process_status === 'notStarted') && (props.port_status === 'notStarted') ? 'row-yellow' : 'row-green'}>
        {state === 'processing' ?  <BsVolumeMuteFill size = "1.8vw" onClick={onClickVolumeMute} className='volume' /> : <BsVolumeUpFill size = "1.8vw" onClick={onClickVolumeUP} className='volume' />}
        <th className='component-name'>{props.name}</th>
        <th className='ip'>{props.ip}</th>
        <th className='port'>{props.port}</th>
        <th className={(props.process_status === 'running') && (localStorage.getItem(props.id) === 'processing' || props.port_status ==='notOpen') ? 'green'  : 'process-status'}>{props.process_status}</th>
        <th className={(props.port_status === 'open') && (localStorage.getItem(props.id) === 'processing' || props.process_status === 'notRunning') ? 'green'   : 'port-status'}>{props.port_status}</th>
        <th className='start-time'>{props.startTime}</th>
        <th className='end-time'>{props.endTime}</th>
        <th className='running-dates'>{runninngDatesCalculator()}</th>
        <th className='uptime'>
          <UPTimeCounter uptime={props.uptime}></UPTimeCounter>
        </th>
      </tr>
    
  )
}

export default TableData