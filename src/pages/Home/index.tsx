import { ProgressBar } from "react-bootstrap";
import Header from "../../components/Header";
import RedButton from "../../components/RedButton";
import styles from "./index.module.css";

export default function Index() {
  return (
    <>
      <Header title="SASTA" />
      <div className={styles.container}>
        <RedButton size="lg" className={styles.button} href="/learning">
          Lerninhalte
        </RedButton>
        <div>
          <div className={styles.label}>Lernstand:</div>
          <ProgressBar
            now={10}
            label={`${10}%`}
            style={{ height: "5vh" }}
            className={styles.progressbar}
            striped
            variant="danger"
            animated
          />
        </div>
        <RedButton size="lg" className={styles.button} href="/glossary">
          Glossar
        </RedButton>
        <RedButton size="lg" className={styles.button} href="/forum">
          Forum
        </RedButton>
      </div>
    </>
  );
}
