import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const HorizontalLineChart = ({ lineChart, lineOptions }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Ensure chartRef, data, and options are available
        if (chartRef.current && lineChart && lineOptions) {
            // Destroy the previous chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Create a new Chart.js instance with the provided data and options
            chartInstance.current = new Chart(chartRef.current, {
                type: 'line', // Set the chart type to 'line' for a line chart
                data: lineChart,
                options: {
                    ...lineOptions,
                    indexAxis: 'y', // Set indexAxis to 'y' for horizontal bars
                },
            });
        }

        // Clean up function to destroy the chart instance on unmount or data/options change
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [lineChart, lineOptions]); // Dependencies to watch for changes

    // Render the canvas element where the chart will be drawn
    return <canvas ref={chartRef} />;
};

export default HorizontalLineChart;
