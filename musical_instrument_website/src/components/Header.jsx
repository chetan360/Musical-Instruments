import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <a href="#" id="logo" className="logo">
        <img src="logo.png" alt="" />
      </a>

      <ul className={`navmenu ${isMenuOpen ? "open" : ""} `}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Who we are</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Shipping</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>

      <div className="nav-icon">
        <a href="#">
          <SearchIcon className="icon" />
        </a>
        <a href="#">
          <NotificationsIcon className="icon" />
        </a>
        <a href="#">
          <AccountCircleIcon className="icon" />
        </a>
        <MenuIcon
          id="menu-icon"
          className={`menuBtn ${isMenuOpen ? "bx-x" : ""}`}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
      </div>
    </header>
  );
}
