import React from 'react';
import { Layout } from 'antd';
import Contents from '../routers/router';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const { Content } = Layout;

function Page({ collapsed }) {
    const { t } = useTranslation(); // Access the t function for translations

    const marginLeft = collapsed ? 'ml-20' : 'ml-60';

    return (
        <Content
            className={`h-auto overflow-scroll no-scrollbar overflow-x-hidden ${marginLeft} scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex flex-col bg-white-smoke`}
        >
            {<Contents t={t} />}
        </Content>
    );
}

export default Page;
