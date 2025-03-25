"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { GrPlay } from "react-icons/gr";
import PlaylistAndRecent from "./skeletons/PlaylistAndRecent";

function RecentSongsList() {
  const {
    setSelectedMedia,
    selectedMedia,
    playingTime,
    componentRef,
    isLoading,
  } = useContext(UserContext);
  const [recentListen, setRecentListen] = useState([]);

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("recentMedia")) || [];
    setRecentListen(getData);
  }, [playingTime]);
  return (
    <>
      <div className="relative h-[90vh] min-w-[100%] p-2 px-2 rounded-xl snap-center xl:min-w-[20%] xl:w-[20%] xl:p-4">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-md lg:rounded-xl"></div>

        {isLoading ? (
          <PlaylistAndRecent />
        ) : (
          <div className="relative z-1">
            <h1 className="text-lg">Recent Listen Songs</h1>
            {recentListen.length == 0 || !recentListen ? (
              <h2 className="py-8 text-center font-semibold">
                No Recent Listened Song!
              </h2>
            ) : (
              <div className=" flex flex-col items-baseline gap-1 overflow-y-scroll h-[69vh] no-scrollbar-home show-scrollbar">
                {recentListen.map(
                  ({ title, artistImg, artistName, id }, index, arr) => (
                    <div
                      onClick={() => (
                        setSelectedMedia(arr[index]),
                        componentRef?.current.scrollIntoView({
                          behavior: "smooth",
                          block: "end",
                          inline: "center",
                        })
                      )}
                      key={id}
                      className="flex items-center gap-2 cursor-pointer duration-100 w-full p-2 rounded-md hover:bg-[#8080804f] xl:w-[95%]"
                    >
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={artistImg}
                          width={100}
                          height={100}
                          loading="eager"
                          alt="Singer"
                          className="min-w-[45px] w-[50px] h-[45px] rounded-md object-cover"
                        />
                        {selectedMedia.id == id && (
                          <div className="absolute w-full h-full bg-[#0000004f] flex items-center justify-center">
                            <GrPlay className="text-lg" />
                          </div>
                        )}
                      </div>
                      <div className="whitespace-nowrap overflow-hidden">
                        <h2>{title}</h2>
                        <h3 className="text-sm text-gray-400 capitalize">
                          {artistName}
                        </h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default RecentSongsList;
