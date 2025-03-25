//import Home from "./components/Home";
// import MusicPlayer from "./components/MusicPlayer";
// import Navbar from "./components/Navbar";
// import Playlists from "./components/Playlists";
// import RecentSongsList from "./components/RecentSongsList";

import dynamic from "next/dynamic";
const Home = dynamic(() => import("./components/Home"));
const MusicPlayer = dynamic(() => import("./components/MusicPlayer"));
const Navbar = dynamic(() => import("./components/Navbar"));
const Playlists = dynamic(() => import("./components/Playlists"));
const RecentSongsList = dynamic(() => import("./components/RecentSongsList"));

import { ContextApi } from "./components/UserContext";

export default function page() {
  return (
    <>
      <ContextApi>
        <div className="h-[100vh] min-h-[100vh] overflow-y-hidden">
          <Navbar />

          <div
            className="flex gap-2 px-2 overflow-x-auto h-[80vh] overflow-y-hidden no-scrollbar-home scroll-smooth snap-x snap-mandatory"
            style={{ touchAction: "pan-x" }}
          >
            <Playlists />
            <Home />
            <RecentSongsList />
          </div>
          <MusicPlayer />
        </div>
      </ContextApi>
    </>
  );
}
