// Returns a list of investments with their stats and prices

import InvestmentPrices from "./InvestmentPrices";

const InvestmentList = () => {
  return (
    <>
      <div className="flex-container justify-content-center align-items-center d-flex flex-wrap gap-2 pb-2">
        <h5 className="text-center">My Investments</h5>
        <button className="btn btn-outline-secondary disabled mb-2 align-items-center d-flex gap-2">
          Live <div className="spinner-grow spinner-grow-sm text-danger"></div>
        </button>
      </div>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <InvestmentPrices />
          <small className="text-center">
            Note: Stock prices are currently not being fetched through backend for speed (free Azure backend goes to sleep if inactive).
          </small>
        </li>
      </ul>
    </>
  );
};

export default InvestmentList;
