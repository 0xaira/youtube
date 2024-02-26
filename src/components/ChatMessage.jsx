import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center gap-2 '> 
            <div>
                <FaUserCircle size='25' className='cursor-pointer' />
            </div>

                <h1 className='font-bold text-sm'>{name}</h1>
                <p className='py-2 text-sm'>{message}</p>

        </div>

    );
}

export default ChatMessage;
