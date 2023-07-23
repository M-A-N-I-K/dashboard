import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    return (
        <div>
            <h2 className="text-gray-800 pb-8 sm:pb-0 font-semibold">Contributions Overtime</h2>
            <Bar
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