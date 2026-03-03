import { useState, useEffect } from "react";
import profileImg from "../assets/RoundPP.png";
import Avatar from "./Avatar";

const Header = () => {
  const [colorScheme, setColorScheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState("bi bi-moon");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
    setThemeIcon((prev) =>
      prev === "bi bi-moon" ? "bi bi-brightness-high" : "bi bi-moon"
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
  }, [colorScheme]);

  return (
    <header className="navbar-header sticky-top px-3 pt-3 pb-1">
      <nav className="navbar-pill d-flex justify-content-between align-items-center px-4 py-2 mx-auto">
        {/* Left: Avatar + Name */}
        <a href="#" className="d-flex align-items-center gap-2 text-decoration-none text-body">
          <Avatar src={profileImg} />
          <span className="fw-semibold d-none d-sm-inline">Joshua Tang</span>
        </a>

        {/* Right: Nav links + theme toggle */}
        <ul className="nav align-items-center gap-1 mb-0">
          <li className="nav-item navbar-button">
            <a
              href="https://github.com/43110JOSHUA"
              target="_blank"
              rel="noreferrer"
              className="nav-link d-flex align-items-center gap-1 px-2"
            >
              <i className="bi bi-github"></i>
              <span className="d-none d-md-inline">GitHub</span>
            </a>
          </li>
          <li className="nav-item navbar-button">
            <a
              href="https://www.instagram.com/joshua.t4n/"
              target="_blank"
              rel="noreferrer"
              className="nav-link d-flex align-items-center gap-1 px-2"
            >
              <i className="bi bi-instagram"></i>
              <span className="d-none d-md-inline">Instagram</span>
            </a>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-sm nav-link px-2"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={themeIcon}></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
