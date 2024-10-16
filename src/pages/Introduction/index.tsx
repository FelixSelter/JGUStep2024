import Header from "../../components/Header";
import styles from "./index.module.css";

export default function Index() {
  return (
    <>
      <Header title="Einführung" />
      <div className={styles.container}>
        <p>
          Hast du schon mal vor einer schwierigen Entscheidung gestanden und
          dich gefragt, welche die mathematisch beste Entscheidung wäre? Genau
          an dieses Problem richtet sich die Spieltheorie! Die Spieltheorie
          beschäftigt sich mit der Analyse von strategischen Interaktionen
          zwischen rationalen Parteien. Heutzutage werden spieltheoretische
          Methoden in allen Bereichen der Wirtschafts- und Sozialwissenschaften
          intensiv verwendet.Sie formalisiert , wie jeder Spieler Erwartungen
          über das Verhalten der Mitspieler bildet oder Entscheidungen der
          Mitspieler reagiert und dann nach gewissen Regeln seine Entscheidungen
          trifft. Erwartungshaltung und sich hineindenken in das
          Entscheidungsproblem der Mitspieler sind zentrale Aspekte der
          Spieltheorie.
        </p>
      </div>
    </>
  );
}
