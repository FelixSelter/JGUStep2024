import Header from "../../components/Header";
import ProgressItem from "./components/ProgressItem";
import styles from "./index.module.css";

export default function Learning() {
  return (
    <>
      <Header title="Lerninhalte" />
      <div className={styles.container}>
        <ProgressItem title="Einführung" index={0} />
        <ProgressItem title="Einführung" index={1} />
        <ProgressItem title="Einführung" index={2} />
        <ProgressItem title="Einführung" index={3} />
        <ProgressItem title="Einführung" index={4} />
        <ProgressItem title="Einführung" index={5} />
        <ProgressItem title="Einführung" index={6} />
        <ProgressItem title="Einführung" index={7} />
        <ProgressItem title="Einführung" index={8} />
        <ProgressItem title="Einführung" index={9} />
        <ProgressItem title="Einführung" index={10} />
        <ProgressItem title="Einführung" index={11} />
        <ProgressItem title="Einführung" index={12} />
      </div>
    </>
  );
}
