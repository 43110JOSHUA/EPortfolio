import profileImg from "../assets/IMG_3676.jpg";

const Header = () => {
  return (
    <header className="row bg-light text-dark py-2 border-bottom">
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
          <h3 className="pt-1">Joshua Tang</h3>
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn text-secondary px-2 d-none d-md-block"
            style={{ fontSize: "1rem", border: "none" }}
          >
            FAQ
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-icon px-2"
            style={{ fontSize: "1rem" }}
          >
            <i className="bi bi-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
