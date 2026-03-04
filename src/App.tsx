import "./scss/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/navBar/Header";
import Profile from "./components/Profile";
import ProjectList from "./components/projectList/ProjectList";
import InvestmentList from "./components/investmentList/InvestmentList";
function App() {
  return (
    <div className="container-fluid bg-tan d-flex flex-column">
      <div className="page-border">
        <Header />
        <main className="py-4">
          <div className="">
            <Profile />
          </div>
          <div className="">
            <ProjectList />
          </div>
        </main>
        <hr />
        <footer className="px-md-5 pt-2 pb-4">
          <InvestmentList />
        </footer>
      </div>
    </div>
  );
}

export default App;
