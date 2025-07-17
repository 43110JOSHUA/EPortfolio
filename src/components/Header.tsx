import profileImg from "../assets/IMG_3676.jpg";
import IconButton from "./IconButton";

const Header = () => {
  return (
    <header className="row bg-light text-dark border-bottom py-2 px-0  px-md-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn p-0 rounded-circle overflow-hidden"
            style={{
              width: "40px",
              height: "40px",
              border: "none",
              background: "none",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
          <h4 className="pt-1">Joshua Tang</h4>
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn text-secondary d-none d-md-block px-2"
            style={{ fontSize: "1rem", border: "none" }}
          >
            FAQ
          </button>
          <IconButton icon="bi bi-github" />
          <IconButton icon="bi bi-moon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
