import React from "react";
import setting from "../../img/setting1.png";
import style from "./Logo.module.css";

const Logo = () => {
  return (
      <div className={style.block}>
        <img src={setting} alt="" />
        <b>Dashboard</b>
        <p>v.01</p>
      </div>
  );
};

export default Logo;
