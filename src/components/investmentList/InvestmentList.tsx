import InvestmentPrices from "./InvestmentPrices";

// Your Investments:
export const investmentsCost: [number, string, number][] = [
  [23, "AAPL", 176.58],
  [32, "AFRM", 52.48],
  [58, "AMZN", 169.77],
  [1, "ASML", 736.75],
  [1, "COST", 926.46],
  [30, "GOOGL", 145.49],
  [1, "INTU", 600.02],
  [6, "META", 591.3],
  [15, "MSFT", 376],
  [9, "SN", 106.71],
  [4, "SPGI", 535.05],
]; // # Shares, Company Symbol, Average Cost per Share

const InvestmentList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Investments</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <h5 className="container-fluid justify-content-center d-flex flex-wrap gap-1 p-0">
            {investmentsCost.map(([amount, symbol]) => (
              <span key={symbol} className="badge bg-success">
                {amount}-{symbol}
              </span>
            ))}
          </h5>
          <InvestmentPrices />
        </li>
      </ul>
    </>
  );
};

export default InvestmentList;
