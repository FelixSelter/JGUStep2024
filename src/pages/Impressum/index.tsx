import { Link } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./index.module.css";

export default function Impressum() {
  return (
    <>
      <Header title="Impressum" />
      <div className={styles.container}>
        <h3>Angaben gemäß § 5 TMG</h3>
        <br />
        <br />
        <h5>Verantwortlich für den Inhalt:</h5>
        <p>
          Clara Jotzo, Felix Selter, Oliver Scholtka [JGU Mainz] [Saarstraße 21]
          [55122 Mainz]
        </p>
        <br />
        <br />
        <h5>Kontakt:</h5>
        <p>E-Mail: [cjotzo@students.uni-mainz.de]</p>
        <br />
        <br />
        <h5>Universität und Studiengang:</h5>
        <p>
          Informatik (B. Sc.) Johannes Gutenberg-Universität Mainz, Fachbereich
          08
        </p>
        <br />
        <br />
        <h5>Betreuer:</h5>
        <Link to="https://www.algorithmics.informatik.uni-mainz.de/people/markus-blumenstock/">
          Dr. Markus Blumenstock
        </Link>
        <br />
        <br />
        <h5>Haftungsausschluss:</h5>
        <p>
          Dieses Projekt wurde im Rahmen des Studieneingangsprojekts an der
          Johannes Gutenberg-Universität Mainz erstellt. Es handelt sich um ein
          studentisches Projekt ohne kommerzielle Absichten. Trotz sorgfältiger
          inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </>
  );
}
