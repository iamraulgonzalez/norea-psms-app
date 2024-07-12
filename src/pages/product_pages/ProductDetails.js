import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const ProductDetail = () => {
    const [t, i18n] = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const getProduct = async () => {
        try {
            const response = await axios.get(`${BASE_URL}Product.php?data=getproductbyid&id=${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.message === 'Product not found') {
                setProduct(null);
            } else {
                setProduct(response.data);
            }
        } catch (error) {
            console.error('Error fetching product details:', error.message);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (!product) {
        return <div>{t('Product not found')}</div>;
    }

    return (
        <div className={i18n.language === 'km' ? 'font-kantumruy flex justify-center flex-col items-center w-full bg-white shadow-md' : 'font-Poppins flex justify-center items-center w-full flex-col bg-white shadow-md'}>
            <div className='p-4 w-full rounded-b-sm flex flex-row gap-4 rounded-lg'>
                <div className='flex items-center justify-center border rounded-lg p-4 bg-slate-100'>
                    <img src={product.image_url} alt={product.name} width={500} className='object-contain' />
                </div>
                <div className='flex flex-col gap-4 ml-8 text-xl'>
                    <h1 className='text-black font-black text-2xl'>{product.name}</h1>
                    <p>{t('Category')}: {product.category_id}</p>
                    <p>{t('Stock')}: {product.stock}</p>
                    <p>{t('Price')}: ${product.price}</p>
                    <span className='flex flex-col gap-4'>
                        <p className='font-black'>Product Details</p>
                        <p className='text-base'>{product.description}</p>
                    </span>
                </div>
            </div>
            <div className='p-4 w-full flex justify-center'>
                <Button type='primary' className='w-full' onClick={() => navigate(-1)}>{t('Back to List')}</Button>
            </div>
        </div>
    );
};

export default ProductDetail;
