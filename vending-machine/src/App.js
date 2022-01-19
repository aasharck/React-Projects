import "./App.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import Biscuits from "./Biscuits";
import Coke from "./Coke";
import Lays from "./Lays";
import Vending from "./Vending";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-Active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="Navbar-Active" to="/Lays">
          Lays
        </NavLink>
        <NavLink exact activeClassName="Navbar-Active" to="/Coke">
          Coke
        </NavLink>
        <NavLink exact activeClassName="Navbar-Active" to="/Biscuits">
          Biscuits
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Vending />}></Route>
        <Route path="/Lays" element={<Lays />}></Route>
        <Route path="/Coke" element={<Coke />}></Route>
        <Route path="/Biscuits" element={<Biscuits />}></Route>
      </Routes>
    </div>
  );
}

export default App;
