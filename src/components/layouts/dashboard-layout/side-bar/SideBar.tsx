"use client";
import { PropsWithChildren, Suspense } from "react";
import { DesktopSideBar } from "./descktop-side-bar/DesktopSideBar";
import { navData } from "./nav.data";
import { MobilSideBar } from "./mobil-side-bar/MobilSideBar";
export function SideBar({ children }: PropsWithChildren) {
  return (
    <>
      <Suspense>
        <DesktopSideBar data={navData}>{children}</DesktopSideBar>
      </Suspense>
      <Suspense>
        <MobilSideBar>{children}</MobilSideBar>
      </Suspense>
    </>
  );
}
