import { FC } from "react";
import styles from "./Setting.module.scss";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/DashboardLayout";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import UserAvatar from "@/components/user-avatar/UserAvatar";
import { BsDot } from "react-icons/bs";

const Setting: FC = () => {
  return (
    <DashboardLayout>
      <div className={styles.setting}>
        <div className={styles.header}>
          <ReactIcon name={"MdQrCode2"} className={styles.icon} />
          <p className={styles.edit}>Edit</p>
        </div>
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
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Setting;
