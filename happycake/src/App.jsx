import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import  Footers  from "./components/Footers";
import "./App.css";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footers />
    </>
  );
};
export default App;
