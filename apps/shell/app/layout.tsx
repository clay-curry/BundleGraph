import "./globals.css";
import type { Metadata } from "next";
import { AppBar, NavigationMenuDemo, NavigationRail } from "./SideNav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="flex items-center justify-center h-full w-full">
          <AppBar />
          <NavigationRail />
          <div className="ml-20">
            {children}
          </div>
          </div>
      </body>
    </html>
  );
}
