import React from "react";
import { Link } from 'react-router-dom';
import { GrView } from "react-icons/gr";
export const InfoCard = ({ link, iconSrc, bgColor, hoverColor, title, count, countText }) => (
    <>
        <Link to={link}>
            <div className={`w-64 h-20 ${bgColor} ${hoverColor} flex flex-row text-white rounded-md shadow-md pr-7 pl-7 text-center items-center justify-between`}>
                <div className='flex flex-col gap-1 mt-2'>
                    <p className='text-xs font-bold text-gray-500'>{title}</p>
                    <p className='text-xl font-black text-black'>{count}</p>
                </div>
                <div className="h-10 w-[2px] bg-gray-400"></div>
                <div className='bg-blue-500 p-1 rounded-md h-10 w-10 flex items-center justify-center'>
                    <span>{iconSrc}</span>
                </div>
            </div>
        </Link>
    </>
);