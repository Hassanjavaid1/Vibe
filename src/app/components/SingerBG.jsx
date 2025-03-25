import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Skeleton from "react-loading-skeleton";

function SingerBG() {
  const { selectedMedia, isPlaying, isLoading } = useContext(UserContext);
  if (!selectedMedia) {
    return;
  }

  const { artistImg } = selectedMedia;

  return (
    <>
      {isLoading ? (
        <Skeleton
          className="h-[30vh]"
          baseColor="#bcb8b838"
          highlightColor="#979393"
        />
      ) : (
        <div
          className={`h-[34vh] rounded-md mt-2 ${
            isPlaying ? "playing" : ""
          } xl:mt-4`}
          style={{
            backgroundImage: `url(${artistImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // boxShadow: "inset 0rem 0rem 3rem 0px #3d3939",
          }}
        ></div>
      )}
    </>
  );
}

export default SingerBG;
