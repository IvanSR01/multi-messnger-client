import { FC } from "react";
import styles from "./Setting.module.scss";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/DashboardLayout";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import UserAvatar from "@/components/user-avatar/UserAvatar";
import { BsDot } from "react-icons/bs";
import clsx from "clsx";
import dynamic from "next/dynamic";

const SettingHeader = dynamic(() =>
  import("./setting-header/SettingHeader").then((mod) => mod.SettingHeader)
);

const Setting: FC = () => {
  return (
    <DashboardLayout>
      <div className={styles.setting}>
        <SettingHeader />
        <div className={styles.info}>
          <UserAvatar
            src="/5d8b4098d7f6a6f4e4d74f121528f0d2.jpg"
            alt="User Avatar"
            size="big"
          />
          <h3 className={styles.name}>John Doe</h3>
          <div className={styles.data}>
            <p className={styles.phone}>+1 (123) 456-7890</p>
            <BsDot />
            <p className={styles.username}>@johndoe</p>
          </div>
        </div>
        <div className={styles.main}>
          <button className={styles.settingButton}>
            <div className={styles.mainInfo}>
              <ReactIcon name="MdOutlineAddAPhoto" />
              <p>Edit photo</p>
            </div>
          </button>
          <button
            className={clsx(styles.settingButton, "mt-[25px]")}
            style={{}}
          >
            <div className={styles.mainInfo}>
              <ReactIcon name="FaRegUserCircle" />
              <p>Your profile</p>
            </div>
          </button>
          <button
            className={clsx(
              styles.settingButton,
              "mt-[25px]",
              styles.roundedBottomNone
            )}
          >
            <div className={styles.mainInfo}>
              <ReactIcon name="IoBookmarkOutline" />
              <p>Saved</p>
            </div>
          </button>
          <div className={styles.border} />
          <button
            className={clsx(
              styles.settingButton,
              styles.roundedBottomNone,
              styles.roundedTopNone
            )}
          >
            <div className={styles.mainInfo}>
              <ReactIcon name="IoCallOutline" />
              <p>Calls</p>
            </div>
          </button>
          <div className={styles.border} />
          <button className={clsx(styles.settingButton, styles.roundedTopNone)}>
            <div className={styles.mainInfo}>
              <ReactIcon name="MdFolder" />
              <p>Foldres</p>
            </div>
          </button>
          <button
            className={clsx(
              styles.settingButton,
              "mt-[25px]",
              styles.roundedBottomNone
            )}
          >
            <div className={styles.mainInfo}>
              <ReactIcon name="IoNotifications" />
              <p>Notifications</p>
            </div>
          </button>
          <div className={styles.border} />
          <button
            className={clsx(
              styles.settingButton,
              styles.roundedBottomNone,
              styles.roundedTopNone
            )}
          >
            <div className={styles.mainInfo}>
              <ReactIcon name="MdOutlinePalette" />
              <p>Theme</p>
            </div>
          </button>
          <div className={styles.border} />
          <button className={clsx(styles.settingButton, styles.roundedTopNone)}>
            <div className={styles.mainInfo}>
              <ReactIcon name="MdLanguage" />
              <p>Language</p>
            </div>
          </button>
          <button className={clsx(styles.settingButton, "mt-[25px]")}>
            <div className={styles.mainInfo}>
              <ReactIcon name="IoStarHalf" />
              <p>Multi Premium</p>
            </div>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Setting;
