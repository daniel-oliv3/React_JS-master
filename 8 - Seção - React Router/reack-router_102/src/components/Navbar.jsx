// 2 - links com react router
import './Navbar.css';

import { Link } from 'react-router-dom';

// ------- Component -------
const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
  );
};

export default Navbar;