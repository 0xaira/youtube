import React from 'react';
import Buttons from './Buttons';

const ButtonList = () => {
  // List of names for YouTube main page buttons
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
    "Gaming",
    "News",
    "Live",
    "Fashion",
    "Learning",
    "Spotlight",
    "360° Video",
  ];

  return (
    <>
      {buttonNames.map((name, index) => (
        <Buttons key={index} name={name} />
        
      ))}
    </>
  );
};

export default ButtonList;
