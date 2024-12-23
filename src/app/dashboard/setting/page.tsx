"use client";
import dynamic from "next/dynamic";
const Setting = dynamic(() => import("@/screens/dashboard/setting/Setting"), {
  ssr: false,
});

export default function Page() {
  return <Setting />;
}
