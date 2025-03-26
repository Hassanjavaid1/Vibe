"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext();

export function ContextApi({ children }) {
  const [data, setData] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [playingTime, setPlayingTime] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const componentRef = useRef(null);
  //Fetch Ai
  const fetchApi = async () => {
    try {
      const response = await fetch("/api/songs");
      const data = await response.json();
      setData(data.songs);
      console.log('content',data)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setIsLoading(true);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          data,
          setData,
          setSelectedMedia,
          selectedMedia,
          playingTime,
          setPlayingTime,
          isPlaying,
          setIsPlaying,
          componentRef,
          setIsLoading,
          isLoading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
