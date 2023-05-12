import React, { useState, useEffect } from 'react';
import './UPTimeCounter.css'

function UPTimeCounter({ uptime }) {
    const getTimeBetweenDates = (startDate, endDate) => {
        let time = {};
        const miliseconds = Math.floor(endDate - startDate);
        const days = Math.floor(miliseconds / (24 * 60 * 60 * 1000));
        const hours = Math.floor((miliseconds - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        const minutes = Math.floor((miliseconds - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / (60 * 1000));
        const seconds = Math.floor((miliseconds - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);
        time['days'] = days;
        time['hours'] = hours;
        time['minutes'] = minutes;
        time['seconds'] = seconds;
        return time;
        // return `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
        // return { seconds, minutes, hours, days };
    };
    const startedTime = new Date(uptime);
    const nowTime = new Date();
    const timeGap = getTimeBetweenDates(startedTime.getTime(), nowTime.getTime());
    const [time, setTime] = useState(timeGap)
    useEffect(() => {
        const interval = setInterval(() => {
            const nowTime = new Date();
            const timeGap = getTimeBetweenDates(startedTime.getTime(), nowTime.getTime());
            setTime(timeGap);
        }, 1000);
        return () => clearInterval(interval);
    }, [uptime]);

    return (
        <div className='time'>
            {/* {uptime !== '----------------' ?  <p>{time}</p>: <p>----------------</p>} */}
            {uptime !== '----------------' ? <>
            <p className='numbers'>{time['days']}</p><p className='symbols'>D</p><p className='colon'>:</p>
            <p className='numbers'>{time['hours']}</p><p className='symbols'>H</p><p className='colon'>:</p>
            <p className='numbers'>{time['minutes']}</p><p className='symbols'>M</p><p className='colon'>:</p>
            <p className='numbers'>{time['seconds']}</p><p className='symbols'>S</p>
            </> 
            : <>
            <p className='numbers'>__</p><p className='symbols'>D</p><p className='colon'>:</p>
            <p className='numbers'>__</p><p className='symbols'>H</p><p className='colon'>:</p>
            <p className='numbers'>__</p><p className='symbols'>M</p><p className='colon'>:</p>
            <p className='numbers'>__</p><p className='symbols'>S</p>
            </>}
        </div>
    );
}

export default UPTimeCounter;