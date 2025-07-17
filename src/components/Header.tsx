import profileImg from "../assets/IMG_3676.jpg";
import IconButton from "./IconButton";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <header className="row border-bottom py-2 px-0  px-md-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <button
            type="button"
            className="btn p-0 rounded-circle overflow-hidden"
            style={{
              width: "40px",
              height: "40px",
              border: "none",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
          <h5 className="pt-1 px-2">Joshua Tang / EPortfolio</h5>
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn d-none d-md-block px-2"
            style={{ fontSize: "1rem", border: "none" }}
          >
            FAQ
          </button>
          <IconButton
            icon="bi bi-github"
            onClick={() =>
              window.open("https://github.com/43110JOSHUA/EPortfolio", "_blank")
            }
          />
          <IconButton icon={"bi bi-moon"} onClick={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
