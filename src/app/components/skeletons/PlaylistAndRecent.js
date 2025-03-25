import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PlaylistAndRecent() {
  return (
    <>
      <div className="flex flex-col gap-3 my-3">
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme
          baseColor="#bcb8b838"
          highlightColor="#979393"
          borderRadius={0}
        >
          <div className="flex items-center gap-3 w-full">
            <Skeleton width={50} height={50} />
            <div className="w-full">
              <Skeleton className=" h-[15px]" />
              <Skeleton width={100} className="  h-[10px]" />
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
}

export default PlaylistAndRecent;
