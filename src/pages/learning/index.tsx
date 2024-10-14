import Header from "../../components/Header";
import Layout from "../../layout";
import ProgressItem from "./components/ProgressItem";
import styles from "./index.module.css";

export default function Learning() {
  return (
    <Layout>
      <Header />
      <div className={styles.container}>
        <ProgressItem title="Einführung" />
        <ProgressItem title="Einführung" />
        <ProgressItem title="Einführung" />
        <ProgressItem title="Einführung" />
        <ProgressItem title="Einführung" />
      </div>
    </Layout>
  );
}
