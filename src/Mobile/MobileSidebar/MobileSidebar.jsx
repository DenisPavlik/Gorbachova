import React from "react";
import style from "./MobileSidebar.module.css";
import close from "../../img/close.png";
import iconKey from "../../img/key-square.png";
import iconProduct from "../../img/3d-square 1.png";
import iconCustomers from "../../img/user-square 1.png";
import iconIncome from "../../img/wallet-money 2.png";
import iconPromote from "../../img/discount-shape 1.png";
import iconHelp from "../../img/message-question 1.png";

const MobileSidebar = (props) => {
  return (
    <div className={style.body}>
      <button onClick={props.openSidebar}>
        <img src={close} alt="close" />
      </button>
      <div className={style.sidebar_menu}>
        <div className={style.sidebar_menu_item}>
          <img src={iconKey} alt="Dashboard" />
          <p>Dashboard</p>
        </div>
        <div className={style.sidebar_menu_item}>
          <img src={iconProduct} alt="Product" />
          <p>Product</p>
        </div>
        <div className={`${style.sidebar_menu_item} ${style.selected}`}>
          <img src={iconCustomers} alt="Customers" />
          <p>Customers</p>
        </div>
        <div className={style.sidebar_menu_item}>
          <img src={iconIncome} alt="Income" />
          <p>Income</p>
        </div>
        <div className={style.sidebar_menu_item}>
          <img src={iconPromote} alt="Promote" />
          <p>Promote</p>
        </div>
        <div className={style.sidebar_menu_item}>
          <img src={iconHelp} alt="Help" />
          <p>Help</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
