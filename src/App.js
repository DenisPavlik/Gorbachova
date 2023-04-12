import Sidebar from "./Sidebar/Sidebar.jsx";
import style from "./App.module.css"
import Product from "./Product/Product.jsx";

const App = () => {
  return (
    <div className={style.body}>
      <Sidebar />
      <Product />
    </div>
  );
};

export default App;
