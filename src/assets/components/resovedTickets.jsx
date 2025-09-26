import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const ResovedTickets = ({resolved,removeFromResolved}) => {
    const {title} = resolved;
    return (
        <div className='bg-[#E0E7FF] mb-2 rounded-xl flex justify-between px-[25px] items-center h-[90px] py-3 gap-3'>           
            <div className='flex flex-col gap-2  mb-2'>
            <p className='  text-xl font-semibold opacity-80'>{title}</p>
                <p className='flex items-center justify-normal gap-2 text-green-600 font-semibold'><FontAwesomeIcon className='text-green-500 '
            icon={faCircleCheck}></FontAwesomeIcon>Completed</p>
            </div>
            <a onClick={() => removeFromResolved(resolved)} className='cursor-pointer font-semibold text-red-600'>Cliclk to remove</a>
        </div>
    );
};

export default ResovedTickets;