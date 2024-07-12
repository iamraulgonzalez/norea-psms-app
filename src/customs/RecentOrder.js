import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StaticLineChart = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const data = months.map((month, index) => ({
        x: month, // Use month names directly as x values
        y: Math.floor(Math.random() * 80) + 10, // Example static y-axis values
    }));

    const options = {
        chart: {
            id: 'static',
            height: 350,
            type: 'line',
            animations: {
                enabled: false, // Disable animations
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        title: {
        },
        markers: {
            size: 0,
        },
        xaxis: {
            categories: months, // Use full month names as categories
        },
        yaxis: {
            max: 100,
        },
        legend: {
            show: false,
        },
    };

    return (
        <ReactApexChart options={options} series={[{ data }]} type="line" height={300} />
    );
};

export default StaticLineChart;
