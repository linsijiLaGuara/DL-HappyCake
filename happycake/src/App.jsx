import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
