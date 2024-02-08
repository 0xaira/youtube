import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        
          <VideoCards key={video.id} info={video} />
       
      ))}
    </div>
  );
};

export default VideoContainer;