import React, { useState, useEffect } from 'react';
import { Spin } from "antd";
import { useTranslation } from 'react-i18next';
const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [t, i18n] = useTranslation()
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={i18n.language == 'km' ? 'font-kantumruy fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center' : 'font-Poppins fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center'}>
            <Spin />
            <p className="mt-4 text-black">{t('one second')}</p>
        </div>
    )
};

export default Loading;
