// Creates charts given data from InvestmentPrices.tsx
import { Chart as ChartJS } from "chart.js/auto";
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
  // Create a map for quick price lookup
  const priceMap = new Map(
    stockPrices.map((stock) => [stock.symbol, stock.price])
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
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Current Worth",
        data: chartData.map((data) => data.currentWorth),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
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
    },
    scales: {
      y: {
        beginAtZero: true,
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
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          isProfit ? "rgba(76, 175, 80, 0.6)" : "rgba(244, 67, 54, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          isProfit ? "rgba(76, 175, 80, 1)" : "rgba(244, 67, 54, 1)",
        ],
        borderWidth: 2,
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
        text: `Total Portfolio: ${isProfit ? "Profit" : "Loss"} $${Math.abs(
          totalGainLoss
        ).toLocaleString()}`,
      },
    },
  };

  return (
    <>
      <div className="flex-container justify-content-center d-flex flex-wrap gap-5">
        <div
          className="dataCard InitialvsCurrentbyShare"
          style={{ width: "80vw", height: "250px" }}
        >
          <Bar data={chartConfig} options={options} />
        </div>
        <div
          className="dataCard InitialvsCurrentbyShare"
          style={{ width: "80vw", height: "250px" }}
        >
          <Doughnut data={doughnutConfig} options={doughnutOptions} />
        </div>
      </div>
    </>
  );
};

export default InvestmentCharts;
