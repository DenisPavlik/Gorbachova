import React from "react";
import Header from "./Header/Header";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import MainBlock from "./MainBlock/MainBlock";

const Mobile = (props) => {
  const openSidebar = () => {
    props.useChang(!props.chang);
  };

  return (
    <div>
      {props.chang ? <MobileSidebar openSidebar={openSidebar} /> : ""}
      <Header openSidebar={openSidebar} />
      <MainBlock  query={props.query} setQuery={props.setQuery}  />
    </div>
  );
};

export default Mobile;
