import { NavLink, Link } from "react-router-dom";
import {useState} from "react";
import "./Nav.css";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/" id="title">
        <img className={menuOpen ? "open" : ""} src="./src/img/logo_img.png" alt="logo" />
      </Link>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/portfolio">
            <div>
              <img src="./src/img/stjerne_img.png" alt="stjerne" />
              <h2>Portfolio</h2>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <div>
              <img src="./src/img/stjerne_img.png" alt="stjerne" />
              <h2>About</h2>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
