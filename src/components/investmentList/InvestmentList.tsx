// Returns a list of investments with their stats and prices

import InvestmentPrices from "./InvestmentPrices";

const InvestmentList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Investments</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <InvestmentPrices />
          <small className="text-center">
            Backend handles secure API calls to finnhub.io for live stock price
            updates (Axios, Express, Cors, Dotenv) Note: Limit 3 calls per
            second.
          </small>
        </li>
      </ul>
    </>
  );
};

export default InvestmentList;
