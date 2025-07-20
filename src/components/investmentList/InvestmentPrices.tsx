import { useEffect, useState } from "react";
import axios from "axios";

interface StockPrice {
  symbol: string;
  price: number;
}

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

  if (loading)
    return (
      <div className="d-flex justify-content-center gap-2">
        <div className="spinner-border" role="status" />
        Fetching stock prices...
      </div>
    );
  if (!stockPrices.length)
    return (
      <div className="text-center text-danger">No stock prices available.</div>
    );

  return (
    <div>
      <h6>Current Stock Prices:</h6>
      <ul>
        {stockPrices.map(({ symbol, price }) => (
          <li key={symbol}>
            {symbol}: ${price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentPrices;
