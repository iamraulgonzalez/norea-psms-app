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
import AddProduct from './AddProduct';

function ProductList() {
  const [t, i18n] = useTranslation();
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [isOpenAddNewProduct, setIsOpenAddNewProduct] = useState(false);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}Product.php?data=getproducts`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching product list:', error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleOpenAddNewProduct = () => {
    setIsOpenAddNewProduct(true);
  };

  const handleCloseAddNewProduct = () => {
    setIsOpenAddNewProduct(false);
  };

  const onSearch = (value) => {
    setSearchProduct(value);
  };

  const handleViewProduct = (id) => {
    navigate(`/product-listings/product-detail/${id}`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Products',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className='flex flex-row gap-2 items-center font-Poppins'>
          <img src={record.image_url} alt={record.name} width={50} className='object-contain' />
          <span className='flex flex-col'>
            <h1 className='text-black'>{record.name}</h1>
            <p className='text-xs text-gray-500'>{record.description}</p>
          </span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <span>$ {record.price}</span>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category_id',
      key: 'category_id',
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
            <Button type='primary' className='rounded' onClick={handleOpenAddNewProduct}>{t('Add New Products')}</Button>
            <Input.Search
              placeholder={t('Search Product')}
              onSearch={onSearch}
              className='w-72 rounded'
            />
          </div>
          <Table
            className={i18n.language === 'km' ? 'font-kantumruy' : 'font-Poppins'}
            columns={columns}
            dataSource={filteredProducts}
            rowKey="id"
          />
        </div>
      </div>
      <AddProduct
        open={isOpenAddNewProduct}
        handleCloseAddNewProduct={handleCloseAddNewProduct}
        fetchProducts={getProducts}
      />
    </>
  );
}

export default ProductList;
