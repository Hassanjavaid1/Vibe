import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function HomeSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-3 my-2 overflow-hidden">
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              <Skeleton width={60} height={60} />
              <div className="w-full leading-5">
                <Skeleton className=" h-[12px]" />
                <Skeleton width={300} className=" h-[10px]" />
                <Skeleton width={100} className="  h-[10px]" />
              </div>
            </div>
            <Skeleton circle width={60} height={60} />
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              <Skeleton width={60} height={60} />
              <div className="w-full leading-5">
                <Skeleton className=" h-[12px]" />
                <Skeleton width={300} className=" h-[10px]" />
                <Skeleton width={100} className="  h-[10px]" />
              </div>
            </div>
            <Skeleton circle width={60} height={60} />
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              <Skeleton width={60} height={60} />
              <div className="w-full leading-5">
                <Skeleton className=" h-[12px]" />
                <Skeleton width={300} className=" h-[10px]" />
                <Skeleton width={100} className="  h-[10px]" />
              </div>
            </div>
            <Skeleton circle width={60} height={60} />
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 justify-between w-full">
            <div className="flex items-center gap-2 w-full">
              <Skeleton width={60} height={60} />
              <div className="w-full leading-5">
                <Skeleton className=" h-[12px]" />
                <Skeleton width={300} className=" h-[10px]" />
                <Skeleton width={100} className="  h-[10px]" />
              </div>
            </div>
            <Skeleton circle width={60} height={60} />
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
}

export default HomeSkeleton;
