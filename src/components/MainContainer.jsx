import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from 'react-redux';
import Header from "./Header";
const MainContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className={isMenuOpen ? "pl-24 mt-16" : "mt-16"} >
      <ButtonList />
      <VideoContainer />

    </div>
  );
};

export default MainContainer;
