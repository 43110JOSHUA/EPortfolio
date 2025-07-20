import InvestmentPrices from "./InvestmentPrices";

// Your Investments:
interface Investment {
  shares: number;
  symbol: string;
  avgCost: number;
}

// # Shares, Company Symbol, Average Cost per Share. Dont forget to update .env
const investmentsCost: Investment[] = [
  { shares: 23, symbol: "AAPL", avgCost: 176.58 },
  { shares: 32, symbol: "AFRM", avgCost: 52.48 },
  { shares: 58, symbol: "AMZN", avgCost: 169.77 },
  { shares: 1, symbol: "ASML", avgCost: 736.75 },
  { shares: 1, symbol: "COST", avgCost: 926.46 },
  { shares: 30, symbol: "GOOGL", avgCost: 145.49 },
  { shares: 1, symbol: "INTU", avgCost: 600.02 },
  { shares: 6, symbol: "META", avgCost: 591.3 },
  { shares: 15, symbol: "MSFT", avgCost: 376 },
  { shares: 9, symbol: "SN", avgCost: 106.71 },
  { shares: 4, symbol: "SPGI", avgCost: 535.05 },
];

const InvestmentList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Investments</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <h5 className="container-fluid justify-content-center d-flex flex-wrap gap-1 p-0">
            {investmentsCost.map(({ shares, symbol }) => (
              <span key={symbol} className="badge bg-success">
                {shares}-{symbol}
              </span>
            ))}
          </h5>
          <InvestmentPrices />
          <small className="text-center">
            Backend handles API calls to finnhub.io for live stock price updates
            then posts results to a local port which the frontend fetches and
            displays. (Axios, Express, Cors, Dotenv) Note: Limit 3 calls per
            second.
          </small>
        </li>
      </ul>
    </>
  );
};

export default InvestmentList;
