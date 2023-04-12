import React, { useState } from "react";
import style from "./Customers.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Users from "./Users/Users";

const Customers = () => {
  const [query, setQuery] = useState("")
  return (
    <div className={style.body}>
      <Header setQuery={setQuery} />
      <Users query={query} />
      <Footer />
    </div>
  );
};

export default Customers;
