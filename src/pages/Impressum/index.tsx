import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Impressum() {
  return (
    <>
      <Header title="Impressum" />
      <p>
        <h3>Angaben gemäß § 5 TMG</h3>
        <br />
        <br />
        <h5>Verantwortlich für den Inhalt:</h5>
        Vorname Nachname [Name der Universität] [Adresse der Universität]
        [Postleitzahl und Ort]
        <br />
        <br />
        <h5>Kontakt:</h5>
        E-Mail: [deine E-Mail-Adresse]
        <h5>Universität und Studiengang:</h5>
        Informatik (B. Sc.) Johannes Gutenberg-Universität Mainz, Fachbereich 08
        <br />
        <br />
        <h5>Betreuer:</h5>
        <Link to="https://www.algorithmics.informatik.uni-mainz.de/people/markus-blumenstock/">
          Dr. Markus Blumenstock
        </Link>
        <br />
        <br />
        <h5>Haftungsausschluss:</h5>
        Dieses Projekt wurde im Rahmen des Studieneingangsprojekts an der
        Johannes Gutenberg-Universität Mainz erstellt. Es handelt sich um ein
        studentisches Projekt ohne kommerzielle Absichten. Trotz sorgfältiger
        inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
        deren Betreiber verantwortlich.
      </p>
    </>
  );
}
