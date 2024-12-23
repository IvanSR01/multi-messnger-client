import { QRCodeCanvas } from "qrcode.react";
import styles from "./QrCodeModal.module.scss";

export const QrCodeModal = () => {
  return (
    <div className={styles.qrCodeModal}>
      <div className={styles.qrCodeContainer}>
        <QRCodeCanvas
          value="https://example.com" // Данные, которые будут закодированы
          size={200} // Размер QR-кода
          bgColor="#ffffff" // Цвет фона
          fgColor="#000000" // Цвет самого QR-кода
          level="H" // Уровень коррекции ошибок (L, M, Q, H)
        />
				<div className={styles.username}>
					@johndoe
				</div>
      </div>
    </div>
  );
};
