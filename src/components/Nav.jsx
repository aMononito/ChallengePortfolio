// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <header key={0} className="navbar-brand text-light align">
          Pedro Enderica - Full Stack Developer
        </header>,
        <Link key={1} className="nav-link text-light align" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={5} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
