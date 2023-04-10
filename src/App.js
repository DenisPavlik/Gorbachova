import Sidebar from "./Sidebar/Sidebar.jsx";
import style from "./App.module.css"

const App = () => {
  return (
    <div className={style.body}>
      <Sidebar />
    </div>
  );
};

export default App;
