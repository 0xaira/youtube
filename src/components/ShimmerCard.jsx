const ShimmerCard = () => {
  return (
    <div className="w-[210px] flex flex-col">
      <div className="w-[210px] h-[150px] rounded-lg bg-gray-300 animate-pulse"></div>

      <div className="flex flex-col mt-2 space-y-2">
        <div className="w-10/12 h-3 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-8/12 h-3 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="flex gap-2">
          <div className="w-4/12 h-3 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-4/12 h-3 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
