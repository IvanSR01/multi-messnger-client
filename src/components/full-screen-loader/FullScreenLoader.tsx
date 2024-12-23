import { Loader } from "../loader/Loader";
import styles from './FullScreenLoader.module.scss'
export function FullScreenLoader() {
  return (
    <div className={styles.fullScreenLoader}>
      <Loader />
    </div>
  );
}
