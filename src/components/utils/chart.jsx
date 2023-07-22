import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./data.js";
import { Data2 } from "./data2.js";
import { Data3 } from "./data3.js";
import { BarChart } from "./barChart.jsx";

Chart.register(CategoryScale);

export default function ChartSection() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.users),
        datasets: [
            {
                label: "Employer : 73,500k",
                data: Data2.map((data) => data.contribution),
                backgroundColor: [
                    "#03254c",
                ],
                barPercentage: 0.5,
                barThickness: 14,
            },
            {
                label: "Employee : 52,500k",
                data: Data3.map((data) => data.contribution),
                backgroundColor: [
                    "#1167b1",
                ],
                barPercentage: 0.5,
                barThickness: 14,
            },
            {
                label: "Total Interest : 243,313k",
                data: Data.map((data) => data.contribution),
                backgroundColor: [
                    "#2a9df4",
                ],
                barPercentage: 0.5,
                barThickness: 14,
            }
        ]
    });

    return (
        <div className="Chart">
            <BarChart chartData={chartData} />
        </div>
    );
}