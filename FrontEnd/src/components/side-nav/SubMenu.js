import React, { useState } from "react";
import { useContext } from "react";
import filterContext from "../../store/filter-context";
import "./SubMenu.css";

const SubMenu = ({ item, categoryStatusDict }) => {
  const [subnav, setSubnav] = useState(false);
  const ctx = useContext(filterContext);

  const showSubnav = () => setSubnav(!subnav);


  const sideNavMenuClickHandler = () => {
    item.subNav && showSubnav()
    ctx.setSelectedMenu(item.category)
    
  }
 
  const classNameCalculator1 = (category, selectedMenu) => {
    let state = false;
    for (let i in categoryStatusDict){
      if (RegExp(category, 'gi').test(i)){
        state = true;
      }
    }
    if ((category === selectedMenu) && (state)){
      return 'sidenav-menu active sidenav-menu-blink';
    }else if(category === selectedMenu){
      return 'sidenav-menu active';
    }else if(state){
      return 'sidenav-menu-blink';
    }else{
      return 'sidenav-menu';
    }
  }

  const classNameCalculator2 = (category, selectedMenu) => {
    let state = false;
    for (let i in categoryStatusDict){
      if (RegExp(category, 'gi').test(i)){
        state = true;
      }
    }
    if ((category === selectedMenu) && (state)){
      return 'sidenav-submenu active sidenav-submenu-blink';
    }else if(category === selectedMenu){
      return 'sidenav-submenu active';
    }else if(state){
      return 'sidenav-submenu-blink';
    }else{
      return 'sidenav-submenu';
    }
  }
 
  return (
    <>
      <ul className={classNameCalculator1(item.category,ctx.selectedMenu)} onClick={sideNavMenuClickHandler}>
        <div >
          <div className="sidenav-label">{item.title}</div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </ul>
      {subnav &&
        item.subNav.map((item, index) => {
          const sideNavSubMenuClickHandler = () => {
            ctx.setSelectedMenu(item.category)
          }
          return (
            <ul className={classNameCalculator2(item.category,ctx.selectedMenu)} key={index} onClick={sideNavSubMenuClickHandler}>
              <div className="sidenav-label">{item.title}</div>
            </ul>
          );
        })}
    </>
  );
};

export default SubMenu;
