import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from 'antd';
import PageHeader from '../../customs/PageHeader';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { BASE_URL } from '../../api/config';
import axios from 'axios';

function Category() {
    const [t, i18n] = useTranslation();
    const [categories, setCategories] = useState('')
    const [searchCategory, setSearchCategory] = useState('');
    // const [isOpenAddNewProduct, setIsOpenAddNewProduct] = useState(false)
    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            await axios.get(`${BASE_URL}Category.php?data=getcategories`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setCategories(res.data);
            });
        } catch (error) {
            console.error('Error fetching category list:', error.message);
        }
    };
    useEffect(() => {

        fetchCategories();
    }, []);


    // const handleOpenAddNewProduct = () => {
    //     setIsOpenAddNewProduct(true)
    // }

    // const handleCloseAddNewProduct = () => {
    //     setIsOpenAddNewProduct(false)
    // }

    // const onSearch = value => {
    //     setSearchProduct(value);
    // };

    const handleViewProduct = (id) => {
        navigate(`/product-listings/product-detail/${id}`);
    };



    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className='flex flex-col gap-2 place-items-start font-Poppins'>
                    <h1 className='text-black'>{record.name}</h1>
                    <p className='text-xs text-gray-500'>{record.description}</p>
                </div>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <div className='flex flex-row gap-2 text-xl justify-center items-center p-2 text-white'>
                    <button onClick={() => handleViewProduct(record.id)} className='bg-blue-600 p-2 rounded'><FaEye /></button>
                    <button onClick={() => handleViewProduct(record.id)} className='bg-green-600 p-2 rounded'><FaRegPenToSquare /></button>
                    <button onClick={() => handleViewProduct(record.id)} className='bg-red-600 p-[6px] rounded text-2xl'><MdDeleteForever /></button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className={i18n.language === 'km' ? 'font-kantumruy' : 'font-Poppins'}>
                <PageHeader title='Product List' sub_text='Product List' link='/' sub_link='/product-listings' />
                <div className='bg-white p-4 shadow-md rounded-b-sm flex flex-col gap-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <Button type='primary' className='rounded'>Add New Products</Button>
                        <Input.Search
                            placeholder='Search Product'
                            className='w-72 rounded'
                        />
                    </div>
                    <Table
                        className={i18n.language === 'km' ? 'font-kantumruy' : 'font-Poppins'}
                        columns={columns}
                        dataSource={categories}
                    />
                </div>
            </div>
        </>
    );
}

export default Category
