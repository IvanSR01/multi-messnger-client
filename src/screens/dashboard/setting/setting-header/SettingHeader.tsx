import { ReactIcon } from "@/components/react-icon/ReactIcon";
import styles from "./SettingHeader.module.scss";
import { useModal } from "@/hooks/useModal";
import { QrCodeModal } from "./qr-code-modal/QrCodeModal";

export function SettingHeader() {
  const qrModal = useModal();
  return (
    <div className={styles.header}>
      <ReactIcon
        name={"MdQrCode2"}
        className={styles.icon}
        onClick={() => qrModal.openModal()}
      />
      <p className={styles.edit}>Edit</p>
      {qrModal.isModalOpen && <QrCodeModal />}
    </div>
  );
}
