import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
  }, [colorScheme]);

  return (
    <div className="container-fluid vh-100 vw-100 d-flex flex-column">
      <Header toggleTheme={toggleTheme} />
      <main className="row px-2 px-md-5 py-4 vh-100 vw-100">
        <div className="col-4">LeftSide</div>
        <div className="col-8">
          <ProjectList />
        </div>
      </main>
    </div>
  );
}

export default App;
