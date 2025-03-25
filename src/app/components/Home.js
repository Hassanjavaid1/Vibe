"use client";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import SingerBG from "./SingerBG";
import { GrPlay } from "react-icons/gr";
import HomeSkeleton from "./skeletons/HomeSkeleton";

function Home() {
  const { data, setSelectedMedia, selectedMedia, componentRef, isLoading } =
    useContext(UserContext);
  const [topMedia, setTopMedia] = useState({});
  const [duration, setDuration] = useState([]);

  // Fetch Songs Duration;

  const fetchDurations = async () => {
    const newDuration = {};

    await Promise.all(
      Object.keys(topMedia).map((name) => {
        return new Promise((resolve) => {
          let audio = new Audio(topMedia[name].file);

          audio.addEventListener("loadedmetadata", () => {
            let minutes = Math.floor(audio.duration / 60);
            let seconds = Math.floor(audio.duration % 60);
            let finalDuration = `${minutes < 10 ? "0" : ""}${minutes}:${
              seconds < 10 ? "0" : ""
            }${seconds} ${minutes < 1 ? "min" : "mins"}`;
            newDuration[name] = finalDuration;

            resolve(); // Ensures all durations are loaded before updating state
          });

          audio.addEventListener("error", () => {
            console.error(`Error loading ${topMedia[name].file}`);
            resolve(); // Resolve even if there's an error to avoid blocking execution
          });
        });
      })
    );

    setDuration(newDuration);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    let result = data.reduce((accum, currValue) => {
      if (!accum[currValue.artistName]) {
        accum[currValue.artistName] = currValue;
      }
      return accum;
    }, {});

    setTopMedia(result);

    // Default Playing Media.

    let defaultMedia = Object.values(result);
    setSelectedMedia(defaultMedia[0]);
  }, [data]);

  useEffect(() => {
    if (Object.keys(topMedia).length > 0) {
      fetchDurations();
    }
  }, [topMedia]);

  useEffect(() => {
    componentRef?.current.scrollIntoView({
      block: "end",
      inline: "center",
    });
  }, []);

  return (
    <>
      <div
        className="relative min-w-[100%] p-2 rounded-xl xl:p-4 snap-center xl:flex-grow xl:min-w-[50%]"
        ref={componentRef}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-md lg:rounded-xl"></div>
        <div className="relative z-auto">
          <h1 className="text-lg lg:text-2xl"> Top Songs to Listen!</h1>
          {isLoading ? (
            <HomeSkeleton />
          ) : (
            <div className="h-[34vh] flex flex-col item-center gap-1 mt-2 overflow-y-scroll no-scrollbar-home xl:mt-3 xl:p-4 xl:gap-4">
              {Object.keys(topMedia).map((name) => (
                <div
                  key={topMedia[name].id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className=" flex items-center gap-2 overflow-hidden lg:w-1/2 lg:gap-4">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={topMedia[name].artistImg}
                        alt="singer"
                        width={100}
                        height={100}
                        loading="eager"
                        className="object-cover min-w-[45px] w-[45px] h-[45px] rounded-md  xl:w-[60px] xl:h-[60px]"
                      />

                      {selectedMedia.id == topMedia[name].id && (
                        <div className="absolute w-full h-full bg-[#00000078] flex items-center justify-center">
                          <GrPlay className="text-lg" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-baseline gap-1 whitespace-nowrap overflow-hidden">
                      <h1 className=" lg:text-lg">{topMedia[name].title}</h1>
                      {/* Mobile artistName */}
                      <h2 className="text-sm flex-1 text-gray-400 capitalize lg:hidden">
                        {topMedia[name].artistName}
                      </h2>
                    </div>
                  </div>
                  {/* web artistName */}
                  <h2 className=" flex-1 text-gray-400 capitalize hidden lg:block">
                    {topMedia[name].artistName}
                  </h2>

                  <h3 className="flex-1 text-gray-400 duration hidden lg:block">
                    {duration[name]}
                  </h3>
                  <div
                    onClick={() => setSelectedMedia(topMedia[name])}
                    className=" cursor-pointer p-4 rounded-full duration-150 hover:bg-[#8080804f]"
                  >
                    <FaRegPlayCircle className="text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <SingerBG />
        </div>
      </div>
    </>
  );
}

export default Home;
