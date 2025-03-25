import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function PlayerSkeleton() {
  return (
    <>
      <div className="container mx-auto p-2 overflow-hidden">
        <div>
          <SkeletonTheme
            baseColor="#bcb8b838"
            highlightColor="#979393"
            borderRadius={0}
          >
            <div className="flex items-center justify-between gap-3 w-full overflow-hidden">
              <div className="w-full ms-3 flex items-center gap-3">
                <Skeleton width={65} className="h-[60px]" borderRadius={3} />
                <div className="leading-5 w-full">
                  <Skeleton className=" h-[12px]" />
                  <Skeleton width={500} className="  h-[10px]" />
                  <Skeleton width={300} className="  h-[10px]" />
                </div>
                <Skeleton width={400} className="h-[60px]" borderRadius={3} />
                <Skeleton width={100} className="h-[60px]" borderRadius={3} />
              </div>
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
}

export default PlayerSkeleton;
