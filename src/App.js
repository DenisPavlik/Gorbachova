import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import style from "./App.module.css";
import Product from "./Product/Product.jsx";
import { useMediaQuery } from "@mui/material";
import Mobile from "./Mobile/Mobile.jsx";
import { useState } from "react";

const App = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [chang, useChang] = useState(false);
  const [query, setQuery] = useState("");

  if (matches) {
    return (
      <Mobile
        chang={chang}
        useChang={useChang}
        query={query}
        setQuery={setQuery}
      />
    );
  } else {
    return (
      <div className={style.body}>
        <Sidebar />
        <Product query={query} setQuery={setQuery} />
      </div>
    );
  }
};

export default App;
