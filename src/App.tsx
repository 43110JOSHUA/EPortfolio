import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid vh-100 vw-100 d-flex flex-column">
      <Header />
      <main className="row flex-fill bg-light p-4">
        <p>Body.</p>
      </main>
    </div>
  );
}

export default App;
