import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex flex-wrap justify-start mt-2 ${isMenuOpen ? 'ml-44 mr-20' : 'ml-0 mr-0'}`}>
      {isLoading ? (
        <div className={`w-${isMenuOpen ? '1/4' : '1/5'} px-4`}>
          <Shimmer />
        </div>
      ) : (
        videos.length === 0 ? (
          <div>No videos found</div>
        ) : (
          videos.map((video, index) => (
            <Link key={index} to={"/watch?v=" + video.id} className={`w-${isMenuOpen ? '1/4' : '1/5'} px-4`}>
              <VideoCards info={video} />
            </Link>
          ))
        )
      )}
    </div>
  );
};

export default VideoContainer;
