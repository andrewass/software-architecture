import "./globals.css";
import { ReactNode } from "react";
import LeftMenu from "@/layout/LeftMenu";
import TopMenu from "@/layout/TopMenu";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <TopMenu />
          <div className="row mx-auto flex max-w-5xl min-w-5xl">
            <LeftMenu />
            <div className="pt-12">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
