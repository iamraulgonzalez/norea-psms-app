import { MdPayment } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export const menuItems = [
    {
        key: '/',
        icon: <LuLayoutDashboard style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Dashboard',
        roles: ['user', 'admin', 'super_admin'],
    },
    {
        key: '/products',
        icon: <RiProductHuntLine style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Products',
        roles: ['user', 'admin', 'super_admin'],
        children: [
            {
                key: '/product-listings',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Product Listings',
                roles: ['user', 'admin', 'super_admin'],
            },
            {
                key: '/brand',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Brand',
                roles: ['user', 'admin', 'super_admin'],
            },
            {
                key: '/category',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Category',
                roles: ['user', 'admin', 'super_admin'],
            },
        ]
    },
    {
        key: '/cart',
        icon: <MdOutlineShoppingCart style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Shopping',
        roles: ['user', 'admin', 'super_admin'],
        children: [
            {
                key: '/cart',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Shopping',
                roles: ['user', 'admin', 'super_admin'],
            },
            {
                key: '/checkout',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Checkout',
                roles: ['user', 'admin', 'super_admin'],
            },
        ]
    },
    {
        key: '/payments',
        icon: <MdPayment style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Payment Method',
        roles: ['admin', 'super_admin'],
    },
    {
        key: '/customer-support',
        icon: <AiOutlineCustomerService style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Customer',
        roles: ['admin', 'super_admin'],
        children: [
            {
                key: '/contact',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Contact',
                roles: ['admin', 'super_admin'],
            },
            {
                key: '/live-chat',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Chart',
                roles: ['admin', 'super_admin'],
            },
        ]
    },
    {
        key: '/promotions-discounts',
        icon: <IoNotificationsOutline style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Promotions',
        roles: ['admin', 'super_admin'],
        children: [
            {
                key: '/coupons',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Coupons',
                roles: ['admin', 'super_admin'],
            },
            {
                key: '/sales',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Sales',
                roles: ['admin', 'super_admin'],
            },
        ]
    },
    {
        key: '/search',
        icon: <BiSearch style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Search & Filtering',
        roles: ['user', 'admin', 'super_admin'],
    },
    {
        key: '/accounts',
        icon: <FaRegUserCircle style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'User Accounts',
        roles: ['user', 'admin', 'super_admin'],
        children: [
            {
                key: '/profile',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Profile',
                roles: ['user', 'admin', 'super_admin'],
            },
            {
                key: '/orders',
                icon: <TbPointFilled style={{ fontSize: '12px', color: 'gray' }} />,
                label: 'Order',
                roles: ['user', 'admin', 'super_admin'],
            },
        ]
    },
    {
        key: '/settings',
        icon: <IoSettingsOutline style={{ fontSize: '22px', color: 'gray' }} />,
        label: 'Settings',
        roles: ['admin', 'super_admin'],
    }
]
