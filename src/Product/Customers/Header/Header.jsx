import React from "react";
import style from './Header.module.css'
import iconSearch from "../../../img/search 1.png"

const Header = (props) => {
    return (
        <div className={style.body}>
            <div className={style.info}>
                <h2>All Customers</h2>
                <p>Active Members</p>
            </div>
            <div className={style.input}>
                <img src={iconSearch} alt="iconSearch" />
                <input type="text" placeholder="Search" onChange={e => props.setQuery(e.target.value)}/>
            </div>
        </div>
    )
}

export default Header;