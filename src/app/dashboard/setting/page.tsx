"use client";
import { FullScreenLoader } from "@/components/full-screen-loader/FullScreenLoader";
import dynamic from "next/dynamic";
const Setting = dynamic(() => import("@/screens/dashboard/setting/Setting"), {
  ssr: false,
	loading: () => <FullScreenLoader />,
});

export default function Page() {
  return <Setting />;
}
