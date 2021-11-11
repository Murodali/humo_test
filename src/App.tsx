import "./App.scss";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="main_page">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
