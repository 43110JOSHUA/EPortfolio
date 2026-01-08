import "./scss/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";
import ExperienceList from "./components/ExperienceList";
import InvestmentList from "./components/investmentList/InvestmentList";

function App() {
  return (
    <div className="container-fluid d-flex flex-column">
      <Header />
      <main className="row g-4 px-md-5 py-4">
        <div className="col-12 col-md-4">
          <Profile />
          <ExperienceList />
        </div>
        <div className="col-12 col-md-8">
          <ProjectList />
        </div>
      </main>
      <hr />
      <footer className="px-md-5 pt-2 pb-4">
        <InvestmentList />
      </footer>
    </div>
  );
}

export default App;
