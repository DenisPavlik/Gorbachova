import React from "react";
import style from "./Users.module.css";

const Customer = (props) => {
  return (
    <div className={style.customer}>
      <div className={style.customerName}>{props.name}</div>
      <div className={style.customerCompany}>{props.company}</div>
      <div className={style.customerPhone}>{props.phone}</div>
      <div className={style.customerEmail}>{props.email}</div>
      <div className={style.customerCountry}>{props.country}</div>
      <div className={`${style.customerStatus} ${props.status === 'Active' ? style.active : style.inactive}`}>
        <div>{props.status}</div>
      </div>
    </div>
  );
};

export default Customer;
