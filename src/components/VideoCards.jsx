import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 max-w-sm rounded-lg shadow-lg bg-white">
      <div className="relative">
        <img
          className="rounded-t-lg w-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-bl-lg text-xs">
          {statistics.viewCount} views
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
