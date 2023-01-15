import "@/styles/globals.css";
import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-[#191919]">
        <main className="min-h-screen text-gray-100">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
