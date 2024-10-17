import RedButton from "../../components/RedButton";
import Header from "../../components/Header";
import styles from "./index.module.css";
import Game from "./Game";

export default function Index() {
  return (
    <>
      <Header title="Das Duell" />
      <div className={styles.container}>
        <p>
          Bei diesem Spiel versuchen zwei Spieler, sich gegenseitig
          abzuschießen, aber beide haben nur jeweils einen Schuss! Beide Spieler
          dürfen abwechselnd entscheiden, ob sie schießen oder die Distanz zum
          anderen Spieler verringern. Die Trefferwahrscheinlichkeit der Spieler
          erhöht sich, je kleiner die Distanz zwischen den Spielern ist. Das
          Spiel ist vorbei, wenn einer der Spieler den anderen trifft oder wenn
          er seinen Schuss verfehlt. Der Spieler, der den anderen trifft oder
          vom anderen verfehlt wird, gewinnt! Wann solltest du anfangen zu
          schießen?
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>
            <b>P1(d)=P2(d)=P(d)</b> Momentane Trefferwahrscheinlichkeit
          </li>

          <li>
            <b>P1(d-1)=P2(d-1)=P(d-1)</b> Trefferwahrscheinlichkeit nach dem
            nächsten Schritt
          </li>
        </ul>

        <div
          id="canvasParent"
          style={{ width: "100vw", position: "relative", left: "-5vmin" }}
        >
          <Game />
        </div>
        <p id="stats"></p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <RedButton id="move">Gehen</RedButton>
          <RedButton id="shoot">Schießen</RedButton>
          <RedButton id="reset">Starten</RedButton>
        </div>
        <b>
          Situation 1: Spieler 1 weiß, dass Spieler 2 im nächsten Zug nicht
          schießen wird
        </b>
        <p>
          In diesem Fall sollte Spieler 1 laufen, um in seinem nächsten Zug eine
          bessere Chance auf einen Treffer zu haben.
        </p>
        <b>
          Situation 2: Spieler 1 weiß, dass Spieler 2 im nächsten Zug schießen
          wird.
        </b>
        <p>
          Die Trefferwahrscheinlichkeit von Spieler 1 hängt von der Entfernung
          „d“ ab und wird als P1(d) bezeichnet. In dieser Situation muss Spieler
          1 seine Trefferwahrscheinlichkeit mit der Wahrscheinlichkeit
          vergleichen, dass Spieler 2 im nächsten Zug nicht trifft. Die
          entscheidende Frage ist, ob P1(d) größer oder gleich der
          Wahrscheinlichkeit ist, dass Spieler 2 nicht trifft, also P1(d) ≥
          1−P2(d−1). Anders ausgedrückt: P1(d) + P2(d−1) ≥ 1. Wenn diese
          Ungleichung erfüllt ist, sollte Spieler 1 schießen. Wenn nicht, sollte
          er laufen. Der größte Abstand „d“, ab dem diese Ungleichung gilt, wird
          als d* bezeichnet.
        </p>
        <i>Was passiert bei größeren Abständen als d*?</i>
        <p>
          Angenommen, der Abstand zwischen den Spielern ist größer als d* und
          Spieler 1 ist am Zug.
        </p>
        <ul>
          <li>
            Wenn Spieler 1 weiß, dass Spieler 2 im nächsten Zug nicht schießen
            wird, sollte er nach Regel 1 laufen.
          </li>
          <li>
            Wenn Spieler 1 weiß, dass Spieler 2 im nächsten Zug schießen wird,
            sollte er ebenfalls laufen, weil d größer als d* ist (nach Regel 2).
          </li>
        </ul>
        <p>
          Daraus folgt: Wenn der Abstand d größer ist als d*, sollte Spieler 1
          immer laufen, unabhängig davon, was Spieler 2 macht.
        </p>
        <i>Was passiert, wenn der Abstand d ≤ d* ist?</i>
        <p>
          In diesem Fall geben die beiden Regeln unterschiedliche Entscheidungen
          vor. Deshalb muss man das Argument anpassen. Betrachten wir den
          letzten möglichen Moment im Spiel, also wenn der Abstand d = 0 ist.
          Hier hat Spieler 1 eine Trefferwahrscheinlichkeit von 100 %, also wird
          er schießen. Gehen wir einen Zug zurück, auf d = 1: Hier weiß Spieler
          2, dass Spieler 1 im nächsten Zug schießen wird, also wird Spieler 2
          nach Regel 2 ebenfalls schießen, da d kleiner ist als d*. Das gleiche
          Argument gilt für d = 2, wo Spieler 1 schießen würde, und für d = 3,
          wo Spieler 2 schießt. Dieses Muster wiederholt sich bis d = d*-1, wo
          Spieler 2 schießt. Betrachten wir dann d = d*: Jetzt weiß Spieler 1,
          dass Spieler 2 bei d = d*-1 schießen wird, also wird er selbst
          ebenfalls nach Regel 2 schießen.
        </p>
        <b>Optimale Entscheidungsregel:</b>
        <p>
          Solange der Abstand d kleiner ist als d* (also P1(d∗) + P2(d∗−1) ≥ 1),
          sollten beide Spieler laufen. Sobald der Abstand d = d* erreicht ist,
          sollte der Spieler schießen.
        </p>
        <b>Lektionen aus dem Spiel:</b>
        <p>
          Aus diesem Spiel lernst du, dass man komplexe Probleme in leichtere
          Teilprobleme zerlegen kann, um eine Analyse zu ermöglichen. Außerdem
          lernt man, wie mächtig Rückwärtsinduktion für die Spieltheorie ist und
          wie man sie anwenden kann. Auf diese Weise können Spieltheoretiker und
          du komplexere Situationen analysieren.
        </p>
      </div>
    </>
  );
}
