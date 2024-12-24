import { ReactIcon } from "@/components/react-icon/ReactIcon";
import styles from "./SettingHeader.module.scss";
import { useModal } from "@/hooks/useModal";
import { QrCodeModal } from "./qr-code-modal/QrCodeModal";

export function SettingHeader() {
  const qrModal = useModal();
  const editModal = useModal();
  return (
    <div className={styles.header}>
      {editModal.isModalOpen ? (
        <p className={styles.edit} onClick={() => editModal.closeModal()}>
          Cancel
        </p>
      ) : (
        <ReactIcon
          name={"MdQrCode2"}
          className={styles.icon}
          onClick={() => qrModal.openModal()}
        />
      )}
      <p
        className={styles.edit}
        onClick={() =>
         !editModal.isModalOpen ? editModal.openModal() : editModal.closeModal()
        }
      >
        {editModal.isModalOpen ? "Done" : "Edit"}
      </p>
      {qrModal.isModalOpen && <QrCodeModal close={qrModal.closeModal} />}
    </div>
  );
}
