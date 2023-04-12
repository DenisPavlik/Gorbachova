import React from "react";
import style from './Users.module.css'
import CustomerContainer from "./CustomerContainer";

const Users = (props) => {

    return (
        <div className={style.body}>
            <div className={style.titles}>
                <div className={`${style.title} ${style.titleName}`}>Customer Name</div>
                <div className={`${style.title} ${style.titleCompany}`}>Company</div>
                <div className={`${style.title} ${style.titlePhone}`}>Phone Number</div>
                <div className={`${style.title} ${style.titleEmail}`}>Email</div>
                <div className={`${style.title} ${style.titleCountry}`}>Country</div>
                <div className={`${style.title} ${style.titleStatus}`}>Status</div>
            </div>
            <div className={style.customers}>
                <CustomerContainer query={props.query} />
            </div>
        </div>
    )
}

export default Users;