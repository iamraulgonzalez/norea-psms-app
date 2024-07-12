import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const PageHeader = ({ title, sub_text, link, sub_link }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='p-3 bg-gray-50 shadow-md flex justify-between'>
            <h1 className={i18n.language === "km" ? 'font-kantumruy text-gray-600 text-2xl font-black' : 'font-Poppins text-gray-600 text-2xl font-black'}>
                {t(title)}
            </h1>
            <div className='flex flex-row gap-4'>
                <span className='flex flex-row items-center gap-2'>
                    <Link to={link}>{t('Dashboard')}</Link>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <IoIosArrowForward /><Link to={sub_link}>{sub_text}</Link>
                </span>
            </div>
        </div>
    );
};

export default PageHeader;
