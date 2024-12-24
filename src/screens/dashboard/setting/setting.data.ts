import type { IconName } from "@/components/react-icon/ReactIcon";

export const settingData: ISettingData[] = [
  {
    title: "Edit photo",
    icon: "MdOutlineAddAPhoto",
    path: "/edit-photo",
    rounded: "full",
    className: "mt-[5px] sm:mt-[40px]",
  },
  {
    title: "Your profile",
    icon: "FaRegUserCircle",
    path: "/profile",
    rounded: "full",
    className: "mt-[25px] sm:mt-[40px]",
  },
  {
    title: "Saved",
    icon: "IoBookmarkOutline",
    path: "/saved",
    rounded: "top",
    className: "mt-[25px] sm:mt-[40px]",
  },
  { title: "Calls", icon: "IoCallOutline", path: "/calls" },
  { title: "Folders", icon: "MdFolder", path: "/folders", rounded: "bottom" },
  {
    title: "Notifications",
    icon: "IoNotifications",
    path: "/notifications",
    rounded: "top",
    className: "mt-[25px] sm:mt-[40px]",
  },
  { title: "Theme", icon: "MdOutlinePalette", path: "/theme" },
  {
    title: "Language",
    icon: "MdLanguage",
    path: "/language",
    rounded: "bottom",
  },
  {
    title: "Multi Premium",
    icon: "IoStarHalf",
    path: "/multi-premium",
    rounded: "full",
    className: "mt-[25px] sm:mt-[40px]",
  },
];

interface ISettingData {
  title: string;
  icon: IconName;
  path: string;
  rounded?: "top" | "bottom" | "full";
  className?: string;
}
