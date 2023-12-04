// 2 - links com react router
import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';

// ------- Component -------
const Navbar = () => {
  return (
    <nav>
        <NavLink 
          to="/"
          // className={({ isActive }) => (isActive ? "esta-ativo" : "não-ativo")}
        >Home</NavLink>
        <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Navbar;