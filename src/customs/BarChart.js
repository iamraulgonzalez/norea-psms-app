import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';
// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ totalStudent, title }) => {
    const {i18n } = useTranslation();
    return (
        <Bar
            style={{ width: '100%' }}
            data={{
                labels: [title],
                datasets: [
                    {
                        label: `ចំនួន ${totalStudent} នាក់`,
                        data: [totalStudent],
                        backgroundColor: "rgba(43, 63, 229, 0.8)",
                        borderColor: "rgba(43, 63, 229, 0.8)",
                        borderWidth: 1,
                    },
                ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        font: {
                            size: 16,
                            family: i18n.language === "km" ? 'kantumruy' : 'Poppins',
                            color: '#333',
                        },
                        align: 'center',
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            precision: 10,
                        }
                    }
                }
            }}
        />
    );
};

export default BarChart;
