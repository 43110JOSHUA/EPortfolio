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

  if (loading) return <div>Loading stock prices...</div>;

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
