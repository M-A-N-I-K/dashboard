import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./piechart.jsx";
import { Data } from "./data.js";
import { BarChart } from "./barChart.jsx";

Chart.register(CategoryScale);

export default function ChartSection() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    return (
        <div className="Chart">
            <PieChart chartData={chartData} />
            <BarChart chartData={chartData} />
        </div>
    );
}