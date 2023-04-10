import React from "react";
import style from "./Menu.module.css";
import iconKey from "../../img/key-square.png"
import iconProduct from "../../img/3d-square 1.png"
import iconCustomers from "../../img/user-square 1.png"
import iconIncome from "../../img/wallet-money 2.png"
import iconPromote from "../../img/discount-shape 1.png"
import iconHelp from "../../img/message-question 1.png"
import iconArrow from "../../img/chevron-right 2.png"
import selectedArrow from "../../img/selected arrow.png"



const Menu = () => {
  return (
    <div className={style.menu_block}>
      <div className={style.categity}>
        <img className={style.icon} src={iconKey} alt="" />
        <p>Dashboard</p>
      </div>
      <div className={style.categity}>
        <img className={style.icon}  src={iconProduct} alt="" />
        <p>Product</p>
        <img className={style.arrow} src={iconArrow} alt="" />
      </div>
      <div className={` ${style.selected} ${style.categity}`}>
        <img className={style.icon}  src={iconCustomers} alt="" />
        <p>Customers</p>
        <img className={style.arrow} src={selectedArrow} alt="" />
      </div>
      <div className={style.categity}>
        <img className={style.icon}  src={iconIncome} alt="" />
        <p>Income</p>
        <img className={style.arrow} src={iconArrow} alt="" />
      </div>
      <div className={style.categity}>
        <img className={style.icon}  src={iconPromote} alt="" />
        <p>Promote</p>
        <img className={style.arrow} src={iconArrow} alt="" />
      </div>
      <div className={style.categity}>
        <img className={style.icon}  src={iconHelp} alt="" />
        <p>Help</p>
        <img className={style.arrow} src={iconArrow} alt="" />
      </div>
    </div>
  );
};

export default Menu;
