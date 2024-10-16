import Header from "../../components/Header";
import ProgressItem from "./components/ProgressItem";
import styles from "./index.module.css";

export default function Learning() {
  return (
    <>
      <Header title="Lerninhalte" />
      <div className={styles.container}>
        <ProgressItem
          title="Einführung"
          index={0}
          href="introduction"
          completed={true}
        />
        <ProgressItem
          title="NASH Gleichgewicht"
          index={1}
          completed={false}
          href="nashequality"
        />
        <ProgressItem
          title="Split or Steal"
          index={2}
          completed={false}
          href="game2"
        />
        <ProgressItem
          title="Das Duell"
          index={3}
          href="game1"
          completed={false}
        />
        <ProgressItem
          title="Kooroperative Spiele"
          index={4}
          completed={false}
        />
        <ProgressItem
          title="Nicht-Kooroperative Spiele"
          index={5}
          completed={false}
        />
        <ProgressItem
          title="Evelutionär Spieltheorie"
          index={6}
          completed={false}
        />
      </div>
    </>
  );
}
