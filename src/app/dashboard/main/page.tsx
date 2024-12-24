import { FullScreenLoader } from "@/components/full-screen-loader/FullScreenLoader";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/screens/dashboard/main/Main"), {
  loading: () => <FullScreenLoader />,
});

export default function Page() {
  return <Main />;
}
