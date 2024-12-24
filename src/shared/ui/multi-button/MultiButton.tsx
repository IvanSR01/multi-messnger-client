import { PropsWithChildren } from "react";
import styles from "./MultiButton.module.scss";
import { MultiButtonProps } from "./MultiButton-type";
import clsx from "clsx";

export function MultiButton({
  children,
  onClick,
  fullRounded,
  topRounded,
  bottomRounded,
  className,
}: PropsWithChildren<MultiButtonProps>) {
  return (
    <button
      className={clsx(
        styles.multiButton,
        {
          [styles.roundedBottom]: bottomRounded,
          [styles.roundedTop]: topRounded,
          [styles.fullRounded]: fullRounded,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
