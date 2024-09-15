import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/navigation/SideBar/Sidebar";
import Home from "./pages/Home/Home";
import BottomBar from "./components/navigation/BottomBar/BottomBar";
import TopBar from "./components/navigation/TopbBar/TopBar";
import Habit from "./pages/Habit/Habit";
import Footer from "./components/Footer/Footer";
import Habit2 from "./pages/Habit2/Habit2";
const App = () => {
  return (
    <>
      <Sidebar />
      <TopBar/>
      {/* layour css is in App.css */}
      <div className="layout ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="/habit2" element={<Habit2 />} />
        </Routes>
      <Footer/>
      </div>
      <BottomBar/>
    </>
  );
};

export default App;
