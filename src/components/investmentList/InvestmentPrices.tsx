// Fetches stock prices from the backend API and displays investment stats
// const BACKEND_URL =
//   import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/stock-prices";
const API_KEY = import.meta.env.VITE_API_KEY || "no_key";

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
  { shares: 75, symbol: "AMZN", avgCost: 183.89 },
  { shares: 1, symbol: "ASML", avgCost: 736.75 },
  { shares: 42, symbol: "GOOGL", avgCost: 173.29 },
  { shares: 2, symbol: "INTU", avgCost: 627.51 },
  { shares: 10, symbol: "META", avgCost: 606.7 },
  { shares: 15, symbol: "MSFT", avgCost: 376 },
  { shares: 25, symbol: "NVDA", avgCost: 177.79 },
  { shares: 11, symbol: "UNH", avgCost: 293.11 },
];
const symbols = [
  "AAPL",
  "AMZN",
  "ASML",
  "GOOGL",
  "INTU",
  "META",
  "MSFT",
  "NVDA",
  "UNH",
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
        // -----Frontend fetches-----
        const promises = symbols.map((symbol) =>
          axios
            .get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`,
            )
            .then((response) => ({
              symbol,
              price: response.data.c,
            })),
        );
        const response = await Promise.all(promises);
        setStockPrices(response);

        // -----Backend fetches-----
        // const response = await axios.get(BACKEND_URL);
        // setStockPrices(response.data);
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
