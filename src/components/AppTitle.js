import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AppTitle = ({ collapsed }) => {
    const { t } = useTranslation();

    return (
        <Link to='/'>
            <div className={`flex flex-col ${collapsed ? 'justify-center pt-2' : 'pt-2 text-center flex-row justify-center'} cursor-pointer items-center`}>
                <img src={require('../assets/images/supermarket-logo-template-concept.png')} width={collapsed ? 100 : 200} alt="eco logo" />
            </div>
        </Link>
    );
};

export default AppTitle;
