const Header = () => {
  return (
    <header className="row bg-light text-dark p-2 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="">Joshua Tang</h3>
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
