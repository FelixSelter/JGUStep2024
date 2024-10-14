import { Button } from "react-bootstrap";
import styles from "./index.module.css";

interface Props {
  title: string;
}

export default function ProgressItem({ title }: Props) {
  return (
    <div className={styles.itemRow}>
      <div className={styles.bars}>
        <div className={styles.verticalbar} />
        <div className={styles.horizontalbar} />
        <div className={styles.verticalbar} />
      </div>
      <Button size="lg" className={styles.button}>
        {title}
      </Button>
    </div>
  );
}
