import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const VerticalBarChart = ({ data, options }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current && data && options) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: 'bar', // Ensure the type is set to 'bar' for vertical bars
                data: data,
                options: options,
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, options]);

    return <canvas ref={chartRef} />;
};

export default VerticalBarChart;
