import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import ProjectList from "./components/ProjectList";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <html data-bs-theme={colorScheme}>
      <div className="container-fluid vh-100 vw-100 d-flex flex-column">
        <Header toggleTheme={toggleTheme} />
        <main className="row flex-fill px-5 py-3 container-fluid vh-100 vw-100 d-flex flex-row">
          <div className="col">LeftSide</div>
          <div className="col">
            <ProjectList />
          </div>
        </main>
      </div>
    </html>
  );
}

export default App;
