const Header = () => {
  return (
    <header className="row bg-light text-black p-3 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Joshua Tang</h1>

        <button
          type="button"
          className="btn btn-link text-black p-0 p-md-2 "
          style={{ fontSize: "1.5rem" }}
        >
          <i className="bi bi-moon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
