const Header = () => {
  return (
    <header className="row bg-light text-black p-2 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="px-2">Joshua Tang</h2>
        <div className="d-flex">
          <button
            type="button"
            className="btn text-black px-2 d-none d-md-block"
            style={{ fontSize: "1rem", border: "none" }}
          >
            FAQ
          </button>
          <button
            type="button"
            className="btn text-black px-2"
            style={{ fontSize: "1.5rem", border: "none" }}
          >
            <i className="bi bi-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
