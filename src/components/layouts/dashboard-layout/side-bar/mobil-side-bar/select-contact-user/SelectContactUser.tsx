import Input from "@/shared/ui/input/Input";
import styles from "./SelectContactUser.module.scss";
import { motion } from "framer-motion";
import { TouchEvent, useState } from "react";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import UserAvatar from "@/components/user-avatar/UserAvatar";
import clsx from "clsx";
import { User } from "@/components/dashboard-components/user/User";
interface Props {
  close: () => void;
  ref: any;
}

export function SelectContactUser({ close, ref }: Props) {
  const [startY, setStartY] = useState<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 100) {
      close();
    }
  };

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      ref={ref}
      className={styles.select}
    >
      <div
        className={styles.heading}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.return} onClick={close}>
          Close
        </div>
        <h3 className={styles.headingText}>Send message</h3>
        <div
          style={{
            width: "8%",
          }}
        ></div>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          style={{
            borderRadius: "10px",
          }}
          className={styles.searchInput}
          icon={<ReactIcon name="FaSearch" />}
          placeholder="Search"
        />
      </div>
      <div className={styles.altCreate}>
        <div className={styles.altItem}>
          <div className={styles.altIcon}>
            <ReactIcon name="MdOutlineGroups" />
          </div>
          <div className={styles.altName}>New Group</div>
        </div>
        <div className={styles.altItem}>
          <div className={styles.altIcon}>
            <ReactIcon name="IoMdContact" />
          </div>
          <div className={styles.altName}>New Contact</div>
        </div>
        <div className={styles.altItem}>
          <div className={styles.altIcon}>
            <ReactIcon name="HiOutlineSpeakerphone" />
          </div>
          <div className={styles.altName}>New Channel</div>
        </div>
      </div>
      <div className={styles.items}>
        {[...Array(10)].map((item, index) => (
          <>
            <div className={styles.itemsHeading}>J</div>
            <User className={styles.border} />
            <User />
          </>
        ))}
      </div>
    </motion.div>
  );
}
