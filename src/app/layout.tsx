import "./globals.css";
import { ReactNode } from "react";
import TopMenu from "@/layout/TopMenu";
import LeftMenu from "@/layout/leftmenu/LeftMenu";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <TopMenu />
          <div className="mx-auto mt-20 flex max-w-400 min-w-400">
            <LeftMenu />
            <div className="divider divider-horizontal bg-yellow-300"></div>
            <div className="bg-red-300 pt-12 pr-5 pl-5">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
