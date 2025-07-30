// Fetches stock prices from the backend API and displays investment stats
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/stock-prices";

import { useEffect, useState } from "react";
import axios from "axios";
import InvestmentCharts from "./InvestmentCharts";

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
  { shares: 19, symbol: "NVDA", avgCost: 174.56 },
  { shares: 9, symbol: "SN", avgCost: 106.71 },
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
        const response = await axios.get(BACKEND_URL);
        setStockPrices(response.data);
      } catch (error) {
        console.error("Error fetching stock prices.");
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
        <div className="d-flex justify-content-center gap-3">
          <div className="spinner-border" role="status" />
          <p>Fetching stock prices...</p>
        </div>
      </>
    );
  }

  if (!stockPrices.length) {
    return (
      <>
        {shareBadges}
        <div className="text-center text-danger">
          No stock prices available.
        </div>
      </>
    );
  }

  return (
    <>
      {shareBadges}
      <div className="d-flex justify-content-center gap-3">
        <InvestmentCharts
          investments={initialInvestmentsCost}
          stockPrices={stockPrices}
        />
      </div>
    </>
  );
};

export default InvestmentPrices;
