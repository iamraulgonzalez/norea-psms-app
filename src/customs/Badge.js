import React from 'react';

const Badge = ({ notiCount }) => {
    const displayCount = notiCount > 9 ? '9+' : notiCount;

    return (
        <span
            className={`absolute top-[-10px] right-[-6px] ${notiCount > 9
                ? 'bg-red-500 text-white px-[4px] py-[3px]'
                : 'bg-red-500 text-white px-[6px] py-[2px]'
                } rounded-full text-xs flex items-center justify-center`}>
            {displayCount}
        </span>
    );
};

export default Badge;
