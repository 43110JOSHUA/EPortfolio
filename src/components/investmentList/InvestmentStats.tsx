import axios from "axios";
import { useEffect, useState } from "react";
import { investmentsCost } from "./InvestmentList";

const API_KEY = "YOUR_FINNHUB_API_KEY"; // Replace with your actual API key

const InvestmentStats = () => {
  const [stockPrices, setStockPrices] = useState<{ [symbol: string]: number }>(
    {}
  );

  useEffect(() => {
    const fetchStockPrices = async () => {
      const symbols = investmentsCost.map(([, symbol]) => symbol);

      try {
        const promises = symbols.map((symbol) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
          )
        );

        const responses = await Promise.all(promises);
        const prices: { [symbol: string]: number } = {};

        responses.forEach((response, index) => {
          prices[symbols[index]] = response.data.c; // 'c' is current price
        });

        setStockPrices(prices);
      } catch (error) {
        console.log("Error fetching stock prices:", error);
      }
    };

    fetchStockPrices();
  }, []);

  return (
    <div>
      <h6>Current Stock Prices:</h6>
      <ul>
        {Object.entries(stockPrices).map(([symbol, price]) => (
          <li key={symbol}>
            {symbol}: ${price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentStats;
