import React from 'react';
import Buttons from './Buttons';

const ButtonList = () => {
  const buttonNames = [
    "Home",
    "Trending",
    "Subscriptions",
    "Library",
    "History",
    "Your Videos",
    "Purchased",
    "Watch Later",
    "Liked Videos",
    "Music",
    // "Gaming",
    // "News",
    // "Live",
    // "Fashion",
    // "Learning",
    // "Spotlight",
    // "360° Video",
  ];

  return (
    <>
      {/* <div className="fixed  z-50 "> */}
        <div className='flex pl-48  '>
          {buttonNames.map((name, index) => (
            <Buttons key={index} name={name} />
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default ButtonList;
