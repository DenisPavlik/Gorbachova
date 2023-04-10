import React from "react";
import style from "./User.module.css"
import avatar from "../../img/Ellipse 8.png"

const User = () => {
    return (
        <div className={style.user}>
            <img src={avatar} alt="avatar" />
            <div className={style.info}>
                <b>Evano</b>
                <p>Project Manager</p>
            </div>
        </div>
    )
}

export default User;