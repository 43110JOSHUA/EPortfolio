import { useState, useEffect } from "react";
import profileImg from "../assets/RoundPP.png";
import IconButton from "./IconButton";
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
    <header className="row bg-opacity-75 bg-body-tertiary border-bottom sticky-top py-2 px-2 px-md-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex d-wrap gap-2 align-items-center">
          <Avatar src={profileImg} />
          <h5 className="pt-1 px-2">Joshua Tang / EPortfolio</h5>
        </div>
        <div className="d-flex gap-2">
          <IconButton
            icon="bi bi-github"
            onClick={() =>
              window.open("https://github.com/43110JOSHUA", "_blank")
            }
          />
          <IconButton
            icon="bi bi-instagram"
            onClick={() =>
              window.open("https://www.instagram.com/joshua.t4n/", "_blank")
            }
          />
          <IconButton icon={themeIcon} onClick={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
