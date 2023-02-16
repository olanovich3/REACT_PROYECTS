import "./App.css";
import Cocktailfinder from "./Components/Cocktailfinder";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Layaout from "./Components/Layaout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layaout>
      <Header />
      <Outlet />
      <Footer />
    </Layaout>
  );
}

export default App;
