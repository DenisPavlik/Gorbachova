import React from "react";
import style from "./Product.module.css"
import Customers from "./Customers/Customers";

const Product = (props) => {
    return (
        <div className={style.body}>
            <h1>Hello Evano 👋🏼,</h1>
            <Customers setQuery={props.setQuery} query={props.query} />
        </div>
    )
}

export default Product