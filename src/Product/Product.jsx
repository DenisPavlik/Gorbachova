import React from "react";
import style from "./Product.module.css"
import Customers from "./Customers/Customers";

const Product = () => {
    return (
        <div className={style.body}>
            <h1>Hello Evano 👋🏼,</h1>
            <Customers />
        </div>
    )
}

export default Product