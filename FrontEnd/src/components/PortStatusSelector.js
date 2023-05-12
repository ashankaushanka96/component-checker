import React from "react";
import classes from "./PortStatusSelector.module.css";
import * as RiIcons from "react-icons/ri";
import { useState } from "react";

function PortStatusSelector({selectedPortStatus, setSelectedPortStatus}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Open', 'Not Open', 'All'];
  const buttonClickHandler = () => setIsActive(!isActive)
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdowndescription}>Port Status</div>
      <div className={classes.dropdownbtn} onClick={buttonClickHandler}>
        {selectedPortStatus}
        <RiIcons.RiArrowDownSFill />
      </div>

      {isActive && (
        <div className={classes.dropdowncontent}>
          {options.map((option, key)=>(
            <div className={classes.dropdownitem} onClick={(e) => {
              setSelectedPortStatus(option)
              setIsActive(false)
            }} key={key}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortStatusSelector;
