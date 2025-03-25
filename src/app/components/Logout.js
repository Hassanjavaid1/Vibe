import { signOut } from "next-auth/react";
import { RxExit } from "react-icons/rx";

function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-start gap-2 p-3 text-md w-full duration-150 cursor-pointer rounded-md bg-[#726f6f7a] xl:p-3 xl:py-[.7rem] xl:text-lg"
    >
      <RxExit /> Logout{" "}
    </button>
  );
}

export default Logout;
