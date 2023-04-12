import React from "react";
import burger from "../../img/menu.png";
import setting from "../../img/setting1.png";
import avatar from "../../img/Ellipse 8.png";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.body}>
      <button onClick={props.openSidebar}>
        <img src={burger} alt="menu" />
      </button>
      <div className={style.logo}>
        <img src={setting} alt="" />
        <b>Dashboard</b>
        <p>v.01</p>
      </div>
      <div className={style.user}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
