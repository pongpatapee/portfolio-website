import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

const NavBar = () => {
  return (
    <nav className="fixed top-0 min-w-full h-16 py-4">
      <div className="flex items-center justify-between mx-20">
        <h1>Logo</h1>
        <div className="flex">
          <ul className="links flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
