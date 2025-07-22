// Creates charts given data from InvestmentPrices.tsx
import "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import type { Investment } from "./InvestmentPrices";

interface StockPrice {
  symbol: string;
  price: number;
}

interface InvestmentChartsProps {
  investments: Investment[];
  stockPrices: StockPrice[];
}

const InvestmentCharts = ({
  investments,
  stockPrices,
}: InvestmentChartsProps) => {
  // Color variables
  const yellowColor = "rgba(255, 210, 0, 0.8)";
  const redColor = "rgba(239, 68, 68, 0.8)";
  const blueColor = "rgba(0, 100, 164, 0.8)";

  // Create a map for quick price lookup
  const priceMap = new Map(
    stockPrices.map((stock) => [
      stock.symbol,
      parseFloat(stock.price.toFixed(2)),
    ])
  );

  // Calculate data for the chart
  const chartData = investments.map((investment) => {
    const currentPrice = priceMap.get(investment.symbol) || 0;
    const totalPurchasePrice = investment.shares * investment.avgCost;
    const currentWorth = investment.shares * currentPrice;

    return {
      symbol: investment.symbol,
      totalPurchasePrice,
      currentWorth,
    };
  });

  const chartConfig = {
    labels: chartData.map((data) => data.symbol),
    datasets: [
      {
        label: "Total Purchase Price",
        data: chartData.map((data) => data.totalPurchasePrice),
        backgroundColor: blueColor,
        border: 0,
      },
      {
        label: "Current Worth",
        data: chartData.map((data) => data.currentWorth),
        backgroundColor: yellowColor,
        border: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Purchase Price vs Current Worth",
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
          maxRotation: 60,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return "$" + parseFloat(value).toFixed(2);
          },
        },
      },
    },
  };

  // Calculate totals for doughnut chart
  const totalPurchasePrice = chartData.reduce(
    (sum, data) => sum + data.totalPurchasePrice,
    0
  );
  const totalCurrentWorth = chartData.reduce(
    (sum, data) => sum + data.currentWorth,
    0
  );
  const totalGainLoss = totalCurrentWorth - totalPurchasePrice;
  const isProfit = totalGainLoss >= 0;

  const doughnutConfig = {
    labels: ["Initial Investment", isProfit ? "Profit" : "Loss"],
    datasets: [
      {
        data: [totalPurchasePrice, Math.abs(totalGainLoss)],
        backgroundColor: [blueColor, isProfit ? yellowColor : redColor],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Total Portfolio Worth: $${totalCurrentWorth.toFixed(2)}`,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex-container justify-content-center d-flex flex-wrap gap-5">
      <div
        className="dataCard InitialvsCurrentbyShare"
        style={{ width: "65vw", height: "300px" }}
      >
        <Bar data={chartConfig} options={options} />
      </div>

      <div
        className="dataCard InitialvsCurrentbyShare"
        style={{ width: "300px", height: "300px" }}
      >
        <Doughnut data={doughnutConfig} options={doughnutOptions} />
      </div>
    </div>
  );
};

export default InvestmentCharts;
