// Returns a list of investments with their stats and prices

import InvestmentPrices from "./InvestmentPrices";

const InvestmentList = () => {
  return (
    <>
      <div className="bg-light-tan border border-light-grey rounded-4 p-4 p-lg-5">
        <div className="d-flex justify-content-center align-items-center gap-3 pb-4">
          <h4 className="mb-0">My Investments</h4>
          <button className="btn btn-outline-secondary disabled align-items-center d-flex gap-2">
            Live{" "}
            <div className="spinner-grow spinner-grow-sm text-danger"></div>
          </button>
        </div>
        <div className="d-flex flex-column gap-3">
          <InvestmentPrices />
          <small className="text-center">
            Note: Stock prices are currently not being fetched through backend
            for speed (free Azure backend goes to sleep if inactive).
          </small>
        </div>
      </div>
    </>
  );
};

export default InvestmentList;
