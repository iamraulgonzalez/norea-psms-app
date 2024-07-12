import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { menuItems } from '../routers';
import Page from './Content';
import { useNavigate, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppTitle from './AppTitle';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState('light');
    const [selectedKey, setSelectedKey] = useState('/');
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location.pathname]);

    const changeTheme = (value) => {
        setTheme(value ? 'light' : 'dark');
    };

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
        navigate(key);
    };

    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (
        <Layout className={i18n.language === "km" ? 'font-kantumruy' : 'font-Poppins'}>
            <Sider
                style={{
                    position: 'fixed',
                    backgroundColor: theme === 'light' ? '#fff' : '#F5F5F5',
                }}
                width={240}
                className='h-screen overflow-auto justify-between no-scrollbar fixed scrollbar-thumb-gray-300 scrollbar-track-gray-100'
                theme={theme}
                collapsed={collapsed}
            >
                <AppTitle collapsed={collapsed} />
                <div className='flex flex-col items-center py-1'>
                    <Menu
                        className={i18n.language === "en" ? 'text-[12px] px-2 flex  flex-col relative align-center font-kantumruy gap-2' : 'text-[12px] px-2 flex flex-col relative align-center font-kantumruy gap-2'}
                        onClick={handleMenuClick}
                        theme={theme}
                        mode="inline"
                        selectedKeys={[selectedKey]}
                        style={{
                            border: 'none',
                            backgroundColor: theme === 'light' ? '#fff' : '#F5F5F5',
                        }}
                    >
                        {menuItems.map(item => (
                            item.children ? (
                                <Menu.SubMenu
                                    key={item.key}
                                    icon={item.icon}
                                    title={t(item.label)}
                                    className={i18n.language === "km" ? 'font-kantumruy' : 'font-Poppins'}
                                >
                                    {item.children.map(child => (
                                        <Menu.Item
                                            className={i18n.language === "km" ? 'font-kantumruy' : 'font-Poppins'}
                                            key={child.key}
                                            icon={child.icon}
                                        >
                                            {t(child.label)}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item
                                    className={i18n.language === "km" ? 'font-kantumruy' : 'font-Poppins'}
                                    key={item.key}
                                    icon={item.icon}
                                >
                                    {t(item.label)}
                                </Menu.Item>
                            )
                        ))}
                    </Menu>
                </div>
            </Sider>
            <Layout>
                <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} changeTheme={changeTheme} switchLanguage={switchLanguage} />
                <Layout className='m-6 flex justify-between'>
                    <Page collapsed={collapsed} />
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Sidebar;
