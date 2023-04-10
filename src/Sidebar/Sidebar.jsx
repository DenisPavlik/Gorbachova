import React from "react";
import Logo from "./Logo/Logo";
import style from "./Sidebar.module.css";
import Menu from "./Menu/Menu";
import User from "./User/User";

const Sidebar = () => {
  return (
    <div className={style.body}>
        <Logo />
        <Menu />
        <User />
      </div>
  );
};

export default Sidebar;
