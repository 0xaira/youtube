import React from 'react';
import Sidebar from './Sidebar';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <span className="px-5 py-2 m-2rounded-lg h-12 flex mb-4 ml-4"><ButtonList/></span>
        <span className='ml-6'><VideoContainer /></span>
        
      </div>
    </div>
  );
};

export default Body;





