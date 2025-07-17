const Header = () => {
  return (
    <header className="row bg-primary text-white p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Joshua Tang</h1>
        <button type="button" className="btn btn-link text-white">
          <i className="bi bi-moon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
