// Fetches stock prices from the backend API and displays investment stats

import { useEffect, useState } from "react";
import axios from "axios";

export interface Investment {
  shares: number;
  symbol: string;
  avgCost: number;
}

interface StockPrice {
  symbol: string;
  price: number;
}

// # Shares, Company Symbol, Average Cost per Share. Dont forget to update .env
const initialInvestmentsCost: Investment[] = [
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

const shareBadges = (
  <h5 className="container-fluid justify-content-center d-flex flex-wrap gap-1 p-0">
    {initialInvestmentsCost.map(({ shares, symbol }) => (
      <span key={symbol} className="badge bg-success">
        {shares}-{symbol}
      </span>
    ))}
  </h5>
);

const InvestmentPrices = () => {
  const [stockPrices, setStockPrices] = useState<StockPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stock-prices");
        setStockPrices(response.data);
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockPrices();
  }, []);

  if (loading) {
    return (
      <>
        {shareBadges}
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="ms-2">Fetching stock prices...</span>
        </div>
      </>
    );
  }

  if (!stockPrices || stockPrices.length === 0) {
    return (
      <>
        {shareBadges}
        <div className="text-center text-danger mt-3">
          No stock prices available.
        </div>
      </>
    );
  }

  return (
    <>
      {shareBadges}
      <div className="row mt-3">
        <div className="col-md-6">
          <h6>Initial Investment Cost:</h6>
          <ul className="list-unstyled">
            {initialInvestmentsCost.map(({ symbol, shares, avgCost }) => (
              <li key={symbol}>
                {symbol}: {shares} shares @ ${avgCost.toFixed(2)} = $
                {(shares * avgCost).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h6>Current Stock Prices:</h6>
          <ul className="list-unstyled">
            {stockPrices.map(({ symbol, price }) => (
              <li key={symbol}>
                {symbol}: ${price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InvestmentPrices;
