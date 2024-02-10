import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Convert the publishedAt to a human-readable format
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - publishedDate;
  let publishedText;

  // Calculate the difference in milliseconds to determine the published time
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (yearsDifference > 0) {
    publishedText = ` ${yearsDifference} year${yearsDifference === 1 ? "" : "s"} ago`;
  } else if (monthsDifference > 0) {
    publishedText = ` ${monthsDifference} month${monthsDifference === 1 ? "" : "s"} ago`;
  } else if (daysDifference > 0) {
    publishedText = `${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`;
  } else if (hoursDifference > 0) {
    publishedText = `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
  } else if (minutesDifference > 0) {
    publishedText = ` ${minutesDifference} minute${minutesDifference === 1 ? "" : "s"} ago`;
  } else {
    publishedText = "just now";
  }

  // Convert view count to K or M format
  const formatViewCount = (count) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(0) + "K";
    } else {
      return (count / 1000000).toFixed(0) + "M";
    }
  };

  return (
    <div className="p-2 m-2 w-80 max-w-sm rounded-lg shadow-xl bg-white">
      <div className="relative">
        <img
          className="rounded-t-lg w-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
        <div className="flex items-center gap-1 text-gray-600">
          <span className=" text-[#02060C99] text-base leading-4 tracking-[-0.3px]">{formatViewCount(statistics.viewCount)} </span>
          <div className="w-1 h-1 bg-[#02060C99] rounded-full"></div>
          <span>{publishedText}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
