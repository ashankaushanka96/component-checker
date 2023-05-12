import React from "react";
import classes from "./ProcessStatusSelector.module.css";
import * as RiIcons from "react-icons/ri";
import { useState } from "react";

function ProcessStatusSelector({selectedProcessStatus, setSelectedProcessStatus}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Started', 'All'];
  const buttonClickHandler = () => setIsActive(!isActive)
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdowndescription}>Process Status</div>
      <div className={classes.dropdownbtn} onClick={buttonClickHandler}>
        {selectedProcessStatus}
        <RiIcons.RiArrowDownSFill />
      </div>

      {isActive && (
        <div className={classes.dropdowncontent}>
          {options.map((option, key)=>(
            <div className={classes.dropdownitem} onClick={(e) => {
              setSelectedProcessStatus(option)
              setIsActive(false)
            }} key={key}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProcessStatusSelector;
