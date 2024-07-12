import React, { useState, useEffect } from 'react'
import { InfoCard } from '../../customs/InfoCard'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomChart from '../../customs/RecentOrder';
import { useTranslation } from 'react-i18next';
import VerticalBarChart from '../../customs/VerticalBarChart';
import { Category, FormatColorResetTwoTone } from '@mui/icons-material';
import SaleOverViewChart from '../../customs/SaleOverViewChart';
import StaticLineChart from '../../customs/RecentOrder';
import { topProducts } from '../../json/SaleProduct';
function Home() {
    const { t, i18n } = useTranslation();
    const [todaySale, setTodaySale] = useState(161.75);
    const [totalUser, setTotalUser] = useState(200);
    const [totalOrder, setTotalOrder] = useState(200);


    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2, 3, 14, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'white',
                titleColor: 'black',
                bodyColor: 'black'
            }
        },
        elements: {
            line: {
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            },
            point: {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                radius: 5
            }
        }
    };

    function calculateTotalSales(products) {
        let totalSales = 0;
        for (let i = 0; i < products.length; i++) {
            totalSales += products[i].sales();
        }
        return totalSales;
    }

    const totalSales = calculateTotalSales(topProducts);
    const formattedTotalSales = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalSales);


    return (
        <>
            <div className={i18n.language === "km" ? 'font-kantumruy flex flex-col gap-6' : 'font-Poppins flex flex-col gap-6'}>
                <div className='flex flex-row justify-between flex-wrap gap-y-8'>
                    <InfoCard
                        link="/user"
                        bgColor="bg-white"
                        hoverColor="hover:bg-gray-200"
                        iconSrc={<AttachMoneyIcon />}
                        title="Today's Sales"
                        count={formattedTotalSales}
                    />
                    <InfoCard
                        link="/user"
                        bgColor="bg-white"
                        hoverColor="hover:bg-gray-200"
                        iconSrc={<PeopleOutlineIcon />}
                        title="Total's Users"
                        count={totalUser}
                    />
                    <InfoCard
                        link="/user"
                        bgColor="bg-white"
                        hoverColor="hover:bg-gray-200"
                        iconSrc={<AddShoppingCartIcon />}
                        title="Orders"
                        count={'+' + totalOrder}
                    />
                    <InfoCard
                        link="/user"
                        bgColor="bg-white"
                        hoverColor="hover:bg-gray-200"
                        iconSrc={<AttachMoneyIcon />}
                        title="Users"
                        count="100"
                    />
                </div>
                <div className='w-full bg-white shadow-md rounded-md p-4 h-96 flex flex-col'>
                    <p className='font-bold text-xl'>Recent Orders</p>
                    <div className='w-full h-[300px]'>
                        <StaticLineChart />
                    </div>
                </div>
                <div className='flex h-auto justify-between flex-row'>
                    <div className='w-[49%] shadow-md bg-white rounded-md h-96 p-4'>
                        <div className='w-full h-[200px] text-white bg-gradient-to-r from-indigo-800 via-indigo-600 to-purple-500 rounded-md'>
                            <VerticalBarChart data={chartData} options={chartOptions} />
                        </div>
                        <div className='flex flex-col gap-1 mt-4'>
                            <h1 className='font-black text-base'>Active User</h1>
                            <p>than last week <span className='text-green-500'> +20%</span></p>
                            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit dolore eaque aut quas omnis!</p>
                            <span className='flex flex-row justify-between'>
                                <p className='text-sm font-black'>3,6K <br /><span className='text-gray-500 text-xs'>Users</span></p>
                                <p className='text-sm font-black'>3,6K <br /><span className='text-gray-500 text-xs'>Users</span></p>
                                <p className='text-sm font-black'>3,6K <br /><span className='text-gray-500 text-xs'>Users</span></p>
                                <p className='text-sm font-black'>3,6K <br /><span className='text-gray-500 text-xs'>Users</span></p>
                            </span>
                        </div>
                    </div>
                    <div className='w-[49%] shadow-md bg-white rounded-md h-96 p-4'>
                        <h1 className='font-black text-base'>Sale Overview</h1>
                        <p>than last year <span className='text-green-500'>+23%</span></p>
                        <div className='w-full h-[280px] rounded-md'>
                            <SaleOverViewChart />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className='bg-white shadow-md h-auto rounded-md w-[49%]'>
                        <div className='flex flex-row justify-between p-4'>
                            <span>
                                <h1 className='text-base font-black'>Top Selling Product</h1>
                            </span>
                            <span className='flex flex-row cursor-pointer text-xs font-bold items-center'>
                                <button className='flex flex-row items-center'>
                                    <select className='p-2 border-none rounded'>
                                        <option className="custom-option" value="option1">view all</option>
                                        <option className="custom-option" value="option2">3 days</option>
                                        <option className="custom-option" value="option3">7 days</option>
                                    </select>
                                </button>
                            </span>
                        </div>
                        <div className="overflow-y-auto max-h-auto p-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Sales
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {topProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-2 whitespace-nowrap flex flex-row gap-3">
                                                <img src={product.image} alt="image" width={40} className='object-contain' />
                                                <span className='flex flex-col gap-0]'>
                                                    {product.name}
                                                    {product.stock === 0 ? <span className='text-red-500 text-xs'>Out of Stock {product.stock}</span> : <span className='text-green-500 text-xs'>In Stock {product.stock}</span>}
                                                </span>
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                                {product.sales()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='bg-white shadow-md h-auto rounded-md w-[49%]'>
                        <div className='flex flex-row justify-between p-4'>
                            <span>
                                <h1 className='text-base font-black'>Top Selling Product</h1>
                            </span>
                            <span className='flex flex-row cursor-pointer text-xs font-bold items-center'>
                                <button className='flex flex-row items-center'>
                                    <select className='p-2 border-none rounded'>
                                        <option className="custom-option" value="option1">view all</option>
                                        <option className="custom-option" value="option2">3 days</option>
                                        <option className="custom-option" value="option3">7 days</option>
                                    </select>
                                </button>
                            </span>
                        </div>
                        <div className="overflow-y-auto max-h-auto p-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Sales
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {topProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-2 whitespace-nowrap flex flex-row gap-3">
                                                <img src={product.image} alt="image" width={40} className='object-contain' />
                                                <span className='flex flex-col gap-0]'>
                                                    {product.name}
                                                    {product.stock === 0 ? <span className='text-red-500 text-xs'>Out of Stock {product.stock}</span> : <span className='text-green-500 text-xs'>In Stock {product.stock}</span>}
                                                </span>
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                                {product.sales()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home