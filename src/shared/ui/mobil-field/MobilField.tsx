import React, { useState } from "react";
import styles from "./MobilField.module.scss";

type MobilFieldProps = {
  placeholder?: string;
};

export function MobilField({ placeholder}: MobilFieldProps) {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.mobileFieldContainer}>
      <input
        type="text"
        className={styles.inputField}
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};
