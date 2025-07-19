const investments: [number, string][] = [
  [58, "AMZN"],
  [32, "AFRM"],
  [30, "GOOGL"],
  [23, "AAPL"],
  [15, "MSFT"],
  [9, "SN"],
  [6, "META"],
  [4, "SPGI"],
  [1, "ASML"],
  [1, "COST"],
  [1, "INTU"],
]; // Add More Investments Here

const InvestmentList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Investments</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <h5 className="container-fluid justify-content-center d-flex flex-wrap gap-1 p-0">
            {investments.map(([amount, symbol]) => (
              <span key={symbol} className="badge bg-success">
                {amount}-{symbol}
              </span>
            ))}
          </h5>
        </li>
      </ul>
    </>
  );
};

export default InvestmentList;
