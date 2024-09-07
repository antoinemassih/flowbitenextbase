// app/layout.tsx
"use client";  // Required for layouts in the app directory

import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <ThemeModeScript />
    </head>
    <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
    <Flowbite theme={{ theme: flowbiteTheme }}>
      <SidebarProvider>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </SidebarProvider>
    </Flowbite>
    </body>
    </html>
  );
}

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64"
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}
