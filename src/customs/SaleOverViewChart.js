import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StaticLineChart = () => {
    const generateData = () => {
        const months = [
            '2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01',
            '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01',
            '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'
        ];
        return months.map(date => ({
            x: new Date(date).getTime(),
            y: Math.floor(Math.random() * 80) + 10, // Example static y-axis values
        }));
    };

    const seriesData1 = generateData();
    const seriesData2 = generateData();

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
            type: 'datetime',
            labels: {
                format: 'MMM', // Format the x-axis labels to show abbreviated month names
                style: {
                    colors: [],
                    fontSize: '12px',
                },
                datetimeUTC: false, // Ensure the dates are in the local timezone
            },
        },
        yaxis: {
            max: 100,
        },
        legend: {
            show: true,
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={[
                { name: 'Dataset 1', data: seriesData1 },
                { name: 'Dataset 2', data: seriesData2 }
            ]}
            type="line"
            height={300}
        />
    );
};

export default StaticLineChart;
