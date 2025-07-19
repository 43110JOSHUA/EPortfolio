import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import ExperienceList from "./components/ExperienceList";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
  }, [colorScheme]);

  return (
    <div className="container-fluid d-flex flex-column">
      <Header toggleTheme={toggleTheme} />
      <main className="row g-4 px-md-5 py-4">
        <div className="col-12 col-md-4">
          <ExperienceList />
        </div>
        <div className="col-12 col-md-8">
          <ProjectList />
        </div>
      </main>
    </div>
  );
}

export default App;
