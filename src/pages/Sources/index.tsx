import Header from "../../components/Header";
import styles from "./index.module.css";

export default function Sources() {
  return (
    <>
      <Header title="Quellen" />
      <div className={styles.container}></div>
      <ul>
        <li>Prof. Dr. Stefan Winter: Grundzüge der Spieltheorien</li>
        <li>
          <a href="https://www.youtube.com/watch?v=M3oWYHYoBvk&t=1859s">
            Vorlesung an der Yale Universität
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=DLl--A0gV3w&t=63s">
            Vorlesung von Daniel Bonevac
          </a>
        </li>
      </ul>
    </>
  );
}
