"use client";

import Image from "next/image";
import { RiPlayListLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa6";
import { GrPlay } from "react-icons/gr";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

//Skeleton
import PlaylistAndRecent from "./skeletons/PlaylistAndRecent";

function Playlists() {
  const { data, setSelectedMedia, selectedMedia, componentRef ,isLoading} =
    useContext(UserContext);
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    // Data Playlists
    let result = data.reduce((accum, currValue) => {
      let artistName = currValue.artistName;
      if (!accum[artistName]) {
        accum[artistName] = [];
      }
      accum[artistName].push(currValue);

      return accum;
    }, {});

    setPlaylistData(result);
  }, [data]);
  //console.log(selectedMedia);
  return (
    <div className="relative min-w-[100%] p-2 rounded-xl snap-center xl:h-[90vh] xl:min-w-[20%] xl:w-[20%] xl:p-4">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-md lg:rounded-xl"></div>
      <div className="relative z-1">
        <h1 className="flex items-center gap-1 text-lg">
          <RiPlayListLine /> Artists Playlists
        </h1>
        {isLoading ? (
          <PlaylistAndRecent />
        ) : (
          <div className=" flex flex-col items-baseline gap-2 overflow-y-scroll h-[69vh] no-scrollbar-home xl:gap-0 show-scrollbar">
            {/* Playlist */}
            {Object.keys(playlistData)
              .reverse()
              .map((name) => (
                <div className="my-2 w-full" key={playlistData[name].id}>
                  <h2 className="flex items-center justify-start gap-3 mb-2 text-left uppercase">
                    From {name}
                    <FaHeadphones />
                  </h2>
                  {playlistData[name].map(
                    (
                      { artistImg, artistName, title, file, id },
                      index,
                      arr
                    ) => (
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
                        className="flex items-center gap-2 p-2 cursor-pointer duration-100 rounded-md hover:bg-[#8080804f] xl:w-[95%]"
                      >
                        <div className="relative flex items-center justify-center">
                          <Image
                            src={artistImg}
                            width={100}
                            height={100}
                            loading="eager"
                           alt="Singer"
                            className="min-w-[45px] w-[45px] h-[45px] rounded-md object-cover"
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
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlists;
