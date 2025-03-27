"use client";
import Image from "next/image";
import { use, useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { UserContext } from "./UserContext";
import PlayerSkeleton from "./skeletons/PlayerSkeleton";
function MusicPlayer() {
  const {
    selectedMedia,
    playingTime,
    setPlayingTime,
    setIsPlaying,
    isLoading,
  } = useContext(UserContext);

  const [autoPlay, setAutoPlay] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  if (!selectedMedia) {
    return null;
  }

  const { title, file, artistImg, artistName } = selectedMedia;
  useEffect(() => {
    if (playingTime) {
      let localData = JSON.parse(localStorage.getItem("recentMedia")) || [];
      localData = localData.filter((item) => item.id !== selectedMedia.id);
      localData.unshift(selectedMedia);
      localStorage.setItem("recentMedia", JSON.stringify(localData));
    }
  }, [playingTime]);

  useEffect(() => {
    if (!isFirstLoad && selectedMedia?.file) {
      setAutoPlay(true);
    }
    setPlayingTime(false);
  }, [selectedMedia]);

  useEffect(() => {
    if (isFirstLoad) {
      setAutoPlay(false);
      setIsFirstLoad(false);
    }
  }, []);

  return (
    <div className="fixed w-full bottom-0 z-10">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {isLoading ? (
        <PlayerSkeleton />
      ) : (
        <div className=" container mx-auto relative z-20 xl:p-2 xl:my-2">
          <div className="flex items-center gap-2">
            <div className="w-[25%] hidden items-center gap-5 lg:flex">
              <Image
                src={artistImg}
                alt={title}
                width={100}
                height={100}
                loading="eager"
                className="object-cover h-[3.4rem] w-[4rem] rounded-md"
              />
              <div className="whitespace-nowrap overflow-hidden">
                <h2>{title}</h2>
                <h3 className="text-sm text-gray-400 capitalize">
                  {artistName}
                </h3>
              </div>
            </div>
            <div className="flex-1">
              <AudioPlayer
                src={file}
                onListen={(e) => {
                  setPlayingTime(e.target.currentTime >= 40 ? true : false);
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                autoPlay={autoPlay}
                layout="horizontal-reverse"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
