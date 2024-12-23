import { QRCodeCanvas } from "qrcode.react";
import styles from "./QrCodeModal.module.scss";
import { ReactIcon } from "@/components/react-icon/ReactIcon";

interface Props {
  close: () => void;
}

export const QrCodeModal = ({ close }: Props) => {
  return (
    <div className={styles.qrCodeModal}>
      <div className={styles.qrCodeContainer}>
        <QRCodeCanvas
          value="https://example.com"
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
        <div className={styles.username}>@johndoe</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.header}>
          <div className={styles.switch}>swit</div>
          <div>QR Code</div>
          <div className={styles.close} onClick={() => close()}>
            <ReactIcon name="MdClose" />
          </div>
        </div>
        <button className={styles.share}>Share</button>
      </div>
    </div>
  );
};
