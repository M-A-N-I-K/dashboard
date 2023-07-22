import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            <h2 className="text-gray-800 font-semibold">Contributions Overtime</h2>
            <Bar
                className="h-[35vh] w-[30vw]"
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                            text: "Contributions Overtime"
                        },
                        legend: {
                            display: true,
                            labels: {
                                usePointStyle: true,
                                font: {
                                    size: 10,
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false
                            },
                        },
                        y: {
                            stacked: true,
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: "In Dollars ($)",
                                font: {
                                    size: 10
                                }
                            },
                        }
                    }

                }}
            />
        </div>
    );
};