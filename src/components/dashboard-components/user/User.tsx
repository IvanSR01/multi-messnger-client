import UserAvatar from "@/components/user-avatar/UserAvatar";
import styles from "./User.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  size?: keyof typeof sizes;
}

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export function User({ className, size = "small" }: Props) {
  return (
    <div className={clsx(styles.item, className, sizes[size])}>
      <UserAvatar
        src="/5d8b4098d7f6a6f4e4d74f121528f0d2.jpg"
        alt="jonh"
        size={size}
      />
      <div className={styles.info}>
        <div className={styles.name}>John Doe</div>
        <div className={styles.lastSeen}>Last seen 1 hour ago</div>
      </div>
    </div>
  );
}
