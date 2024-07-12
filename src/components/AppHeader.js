import React, { useEffect, useState } from 'react';
import { Layout, Button, message } from 'antd';
import { IoMenu, IoClose, IoNotificationsOutline, IoMailOpenOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Badge from '../customs/Badge';

const { Header } = Layout;

const AppHeader = ({ collapsed, setCollapsed, changeTheme, switchLanguage }) => {
    const { t, i18n } = useTranslation();
    const [studentNotification, setStudentNotification] = useState('');
    const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false);
    const [isOpenUserProfileModal, setIsOpenUserProfileModal] = useState(false);
    const openUserProfileModal = () => {
        setIsOpenUserProfileModal(true);
    }
    const closeUserProfileModal = () => {
        setIsOpenUserProfileModal(false);
    }

    const openNotificationModal = () => {
        setIsOpenNotificationModal(true);
    }

    const closeNotificationModal = () => {
        setIsOpenNotificationModal(false);
    }
    const FlagIcon = ({ code }) => {
        return code === 'en' ? (
            <img src={require('../assets/icons/usflag.png')} alt={t('English Flag')} width={35} />
        ) : (
            <img src={require('../assets/icons/khmerflag.png')} alt={t('Cambodian Flag')} width={30} />
        );
    };

    return (
        <>
            <Header className={collapsed ? 'bg-gray-100 ml-8 h-20 items-center' : 'bg-gray-100 ml-48 h-20'}>
                <div className={i18n.language === "km" ? 'flex flex-row mt-2 justify-between font-kantumruy' : 'flex flex-row mt-2 justify-between font-Poppins'}>
                    <div className='flex flex-row'>
                        <Button
                            className='rounded-full'
                            type="text"
                            icon={collapsed ? <IoMenu className='text-gray-500' /> : <IoClose className='text-gray-500' />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '20px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div className='flex gap-3 '>
                            <Link to="/">
                                <p className='font-bold text-gray-500 cursor-pointer'>{t('Dashboard')}</p>
                            </Link>
                            <Link to="/user">
                                <p className='font-bold text-gray-500 cursor-pointer'>{t('Users')}</p>
                            </Link>
                            <Link to="/setting">
                                <p className='font-bold text-gray-500 cursor-pointer'>{t('Settings')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 -mx-6'>
                        <div className='flex flex-row items-center mt-1 gap-2'>
                            {
                                <button onClick={() => {
                                    switchLanguage(i18n.language === 'en' ? 'km' : 'en')
                                    message.success(i18n.language === 'en' ? 'language switched to English' : 'language switched to Khmer')
                                }}>
                                    <FlagIcon code={i18n.language === 'en' ? 'en' : 'km'} />
                                </button>
                            }
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <IoMailOpenOutline fontSize={'25'} color='black' style={{ cursor: 'pointer' }} />
                            <div className='h-5 bg-gray-500' style={{ width: '1px', cursor: 'pointer' }}></div>
                            <div className='relative'>
                                <IoNotificationsOutline fontSize={'25'} color='black' style={{ cursor: 'pointer' }} />
                                <Badge notiCount={3} />
                            </div>
                            <div className='h-5 bg-gray-500' style={{ width: '1px' }}></div>
                            <button className='cursor-pointer bg-gray-200 rounded-full' onClick={openUserProfileModal}>
                                <img src={require('../assets/images/elon_musk_PNG12.png')} alt="profile" width={25} className='cursor-pointer rounded-full' />
                            </button>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default AppHeader;
