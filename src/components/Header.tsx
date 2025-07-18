import profileImg from "../assets/IMG_3676.jpg";
import IconButton from "./IconButton";
import Avatar from "./Avatar";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <header className="row bg-body-tertiary border-bottom sticky-top py-2 px-2   px-md-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <Avatar src={profileImg} />
          <h5 className="pt-1 px-2">Joshua Tang / EPortfolio</h5>
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn text-secondary d-none d-md-block px-2"
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
