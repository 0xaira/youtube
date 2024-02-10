import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between px-16 py-10 gap-32">
      <div className="flex flex-col gap-10">
        <ShimmerCard />
        <ShimmerCard />
      </div>
      <div className="flex flex-col gap-10">
        <ShimmerCard />
        <ShimmerCard />
      </div>
      <div className="flex flex-col gap-10">
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
