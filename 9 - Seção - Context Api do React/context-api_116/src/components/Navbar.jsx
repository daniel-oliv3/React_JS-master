import { NavLink } from "react-router-dom";

import "./Navbar.css";

// ------- Component -------
const Navbar = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/products"
      >
        Produtos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/about"
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;