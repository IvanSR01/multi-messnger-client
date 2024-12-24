"use client";
import { FC } from "react";
import styles from "./Setting.module.scss";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/DashboardLayout";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import UserAvatar from "@/components/user-avatar/UserAvatar";
import { BsDot } from "react-icons/bs";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { MultiButton } from "@/shared/ui/multi-button/MultiButton";
import { settingData } from "./setting.data";

const SettingHeader = dynamic(() =>
  import("./setting-header/SettingHeader").then((mod) => mod.SettingHeader)
);

const Setting: FC = () => {
  return (
    <DashboardLayout>
      <div className={styles.layout}>
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
            {settingData.map(
              ({ title, icon, path, rounded, className }, index) => (
                <MultiButton
                  key={index}
                  fullRounded={rounded === "full"}
                  topRounded={rounded === "top"}
                  bottomRounded={rounded === "bottom"}
                  className={clsx(className, styles.settingButton)}
                >
                  <div className={styles.mainInfo}>
                    <ReactIcon name={icon} />
                    <p>{title}</p>
                  </div>
                </MultiButton>
              )
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Setting;
