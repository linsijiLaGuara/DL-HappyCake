import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/"  />
        <Route path="/planes" />
      </Routes>
    
    </div>
  );
};
export default App;
