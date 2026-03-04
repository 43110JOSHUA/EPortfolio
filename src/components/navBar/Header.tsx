import React, { useState, useEffect } from "react";
import profileImg from "../../assets/RoundPP.png";
import Avatar from "./Avatar";

const Header = () => {
  const [colorScheme, setColorScheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState("bi bi-moon");
  const [visible, setVisible] = useState(true);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--theme-toggle-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-toggle-y", `${y}px`);

    const nextScheme = colorScheme === "light" ? "dark" : "light";
    const nextIcon = themeIcon === "bi bi-moon" ? "bi bi-brightness-high" : "bi bi-moon";

    const applyTheme = () => {
      document.documentElement.setAttribute("data-bs-theme", nextScheme);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", nextScheme === "dark" ? "#1d1e1f" : "#f8f7f2");
      setColorScheme(nextScheme);
      setThemeIcon(nextIcon);
    };

    if (!("startViewTransition" in document)) {
      applyTheme();
      return;
    }

    (document as any).startViewTransition(applyTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        colorScheme === "dark" ? "#1d1e1f" : "#f8f7f2",
      );
    }
  }, [colorScheme]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar-header sticky-top px-3 pt-3 pt-lg-5 pb-1${visible ? "" : " navbar-hidden"}`}
    >
      <nav className="navbar-pill bg-light-tan border border-light-grey d-flex justify-content-between align-items-center px-4 py-2 mx-auto">
        {/* Left: Avatar + Name */}
        <a className="d-flex align-items-center gap-2 text-decoration-none text-body">
          <Avatar src={profileImg} />
          <span className="fw-semibold">Joshua Tang</span>
        </a>

        {/* Right: Nav links + theme toggle */}
        <ul className="nav align-items-center gap-1 mb-0">
          <li className="nav-item hover-button">
            <a
              href="https://github.com/43110JOSHUA"
              target="_blank"
              className="nav-link text-body d-flex align-items-center gap-1 px-2"
            >
              <i className="bi bi-github"></i>
              <span className="d-none d-md-inline">GitHub</span>
            </a>
          </li>
          <li className="nav-item hover-button">
            <a
              href="https://www.instagram.com/joshua.t4n/"
              target="_blank"
              className="nav-link text-body d-flex align-items-center gap-1 px-2"
            >
              <i className="bi bi-instagram"></i>
              <span className="d-none d-md-inline">Instagram</span>
            </a>
          </li>
          <li className="nav-item hover-button">
            <button
              type="button"
              className="btn btn-sm text-body border-0 px-2"
              onClick={toggleTheme}
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
