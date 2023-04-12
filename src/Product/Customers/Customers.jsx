import React from "react";
import style from "./Customers.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Users from "./Users/Users";

const Customers = (props) => {
  
  return (
    <div className={style.body}>
      <Header setQuery={props.setQuery} />
      <Users query={props.query} />
      <Footer />
    </div>
  );
};

export default Customers;
