"use client";

import Image from "next/image";
import Logout from "./Logout";
import { useSession } from "next-auth/react";
import { useState } from "react";

function Navbar() {
  const { data: session } = useSession();
  const [toggleProfile, setToggleProfile] = useState(false);

  const handleProfileView = () => {
    if (toggleProfile) {
      setToggleProfile(false);
    } else {
      setToggleProfile(true);
    }
  };
  return (
    <>
      <div className="container mx-auto p-2 mb-2 relative xl:my-2 xl:p-4">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md lg:rounded-md"></div>
        <div className="flex items-center gap-2 justify-between relative z-10 xl:gap-4">
          <Image
            src="/logo.png"
            width={100}
            height={126}
            alt="logo"
            priority
            className="w-[120px] object-cover lg:w-[160px]"
          />
          <div className="flex items-center gap-3">
            <div
              className={`${
                toggleProfile ? "flex" : "hidden"
              } items-center justify-center relative lg:flex`}
            >
              <div className="flex flex-col items-center bg-[#040404ce] p-3 z-50 rounded-md absolute top-[28px] lg:static lg:bg-transparent lg:p-0 ">
                <span>Welcome!</span>
                <div className="font-semibold capitalize whitespace-nowrap lg:block">
                  {session?.user?.name || session?.user?.email || "Loading"}
                </div>
              </div>
            </div>
            <Image
              src={session?.user?.image || "/user-img.png"}
              width={100}
              height={100}
              alt="user"
              priority
              onClick={handleProfileView}
              className="w-[45px] h-[45px] object-cover rounded-full border-2 border-yellow-500"
            />
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
