import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.body}>
      <p>Showing data 1 to 8 of 256K entries</p>
      <div className={style.paginator}>
        <div className={style.paginatorItem}>{"<"}</div>
        <div className={`${style.paginatorItem} ${style.selected} ${style.one}`}>1</div>
        <div className={`${style.paginatorItem} ${style.two}`}>2</div>
        <div className={`${style.paginatorItem} ${style.three}`}>3</div>
        <div className={`${style.paginatorItem} ${style.four}`}>4</div>
        <div className={style.threeDots}>...</div>
        <div className={`${style.paginatorItem} ${style.forty}`}>40</div>
        <div className={style.paginatorItem}>&gt;</div>
      </div>
    </div>
  );
};

export default Footer;
