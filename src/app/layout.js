import { Poppins } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./SessionWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Vibe",
  description: "The vibes you need",
  // Reference to the manifest.json file for PWA setup
  manifest: "/manifest.json",
  // Define a theme color for the browser toolbar and splash screens
  // Provide icons for various devices
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Additional head elements can be added here if needed */}
      <head>
        {/* Enables mobile web app capability on Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta rel="manifest" href="/manifest.json" />
        <meta rel="icon" href="/logo.png" />
        <meta rel="apple-touch-icon" href="/logo.png" />
      </head>
      <SessionWrapper>
        <body className={poppins.variable}>{children}</body>
      </SessionWrapper>
    </html>
  );
}
