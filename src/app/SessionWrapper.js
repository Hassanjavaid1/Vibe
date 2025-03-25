"use client";

import { SessionProvider } from "next-auth/react";

function SessionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionWrapper;
