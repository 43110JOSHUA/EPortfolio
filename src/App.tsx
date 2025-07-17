import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <html data-bs-theme={colorScheme}>
      <div className="container-fluid vh-100 vw-100 d-flex flex-column">
        <Header toggleTheme={toggleTheme} />
        <main className="row flex-fill p-5">
          <p>Body.</p>
        </main>
      </div>
    </html>
  );
}

export default App;
