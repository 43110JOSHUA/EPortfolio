// Creates charts given data from InvestmentPrices.tsx
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

const InvestmentCharts = () => {
  return (
    <div className="dataCard CategoryCard">
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Investments",
              data: [200, 300, 400],
            },
          ],
        }}
      />
    </div>
  );
};

export default InvestmentCharts;
