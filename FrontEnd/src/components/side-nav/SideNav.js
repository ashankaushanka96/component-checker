import React from "react";
import "./SideNav.css";
import SubMenu from "./SubMenu";
import { SideNavData } from './SideNavData';

function SideNav({categoryStatusDict}) {

  return (
    <div className="SideNav">
      {SideNavData.map((item, index) => {
        return <SubMenu item={item} key={index} categoryStatusDict={categoryStatusDict}/>;
      })}
    </div>
  );
}

export default SideNav;
