import { useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  ButtonGroup,
  Table,
  ToggleButton,
} from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";
import RedAccordion from "../../components/RedAccordion";

function delay(delay: number) {
  return new Promise((r) => {
    setTimeout(r, delay);
  });
}

export default function TwoButtonsGame() {
  const [radioValue, setRadioValue] = useState<"green" | "red" | null>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [AT, setAT] = useState("");

  async function timedAlert(msg: string) {
    setAT(msg);
    setAlertVisible(true);
    await delay(2500);
    setAlertVisible(false);
  }

  const results: Record<"green" | "red", Record<"green" | "red", string>> = {
    green: {
      green: "Ihr habt gewonnen!!!!",
      red: "Du hast verloren :(",
    },
    red: {
      green: "Du hast gewonnen ;)",
      red: "Du gewinnst 2 Euro!!!!!?!!",
    },
  };
  const radios: { name: string; value: "red" | "green" }[] = [
    { name: "Split", value: "green" },
    { name: "Steal", value: "red" },
  ];

  const auswerten = () => {
    const computerAnswer: "green" | "red" =
      Math.random() < 0.3 ? "green" : "red";

    if (radioValue === null) {
      timedAlert("Bitte erst eine der beiden Optionen aussuchen.");
      return;
    }

    timedAlert(results[radioValue as "green" | "red"][computerAnswer]);
  };

  return (
    <>
      <Header title="Split or Steal" />
      <div className={styles.container}>
        <p>
          In diesem Spiel geht es darum, eine Million Euro zu gewinnen. Zwei
          Spielern werden 2 Buzzer zur Option gestellt.
        </p>
        <p>
          <h6 className={styles.green}>GRÜNER BUZZER „SPLIT“</h6>: die Million
          splitten und beide mit 500.000 Euro nach Hause gehen.
        </p>
        <p>
          <h6 className={styles.red}>ROTER BUZZER „STEAL“</h6>: eine Person
          bekommt die 1 Million allein und der andere bekommt nichts.
        </p>
        <p>
          ACHTUNG: Wenn beide Spieler, den roten Buzzer drücken, gewinnen beide
          einen Trostpreis von 2 Euro.
        </p>
        <h6>Beschreibung:</h6>
        <p>
          In diesem Beispiel wird angenommen, dass sich beide Spieler überhaupt
          nicht kennen und nicht miteinander kommunizieren. Sie haben keinen
          Einfluss aufeinander bis auf den Fakt, dass sie die andere Person
          nicht kennen und einander nicht trauen.
          <br />
          <br />
          <p>
            In der Spieltheorie werden Spiele oft graphisch dargestellt, um die
            Analyse leichter zu machen. In diesem Szenario gibt es drei
            Endergebnisse. Dieses Spiel lässt sich leicht als Tabelle
            darstellen:
          </p>
        </p>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Endergebnisse</th>
              <th>SP2 ➜ 🟢</th>
              <th>SP2 ➜ 🔴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SP1 ➜ 🟢</td>
              <td>
                SP1 = <p className={styles.green}>500k</p>,
                <br />
                SP2 = <p className={styles.green}>500k</p>
              </td>
              <td>
                SP1 = 0
                <br />
                SP2 = <p className={styles.red}>1MIL</p>
              </td>
            </tr>
            <tr>
              <td>SP1 ➜ 🔴</td>
              <td>
                SP1 = <p className={styles.red}>1MIL</p>,
                <br />
                SP2 = 0
              </td>
              <td>
                SP1= 2€,
                <br />
                SP2 = 2€
              </td>
            </tr>
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2vmin",
          }}
        >
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-danger" : "outline-success"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) =>
                  setRadioValue(e.currentTarget.value as "green" | "red")
                }
                size="lg"
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>

          <Button
            disabled={alertVisible}
            variant="outline-dark"
            onClick={auswerten}
          >
            Auswerten
          </Button>
          <Alert variant="info" show={alertVisible}>
            {AT}
          </Alert>
          <Accordion style={{ gridColumn: "1 / span 2" }}>
            <RedAccordion title={"Erklärung"} eventKey="">
              <p>
                Offensichtlich ist die strategisch beste Kombination (S1-
                Teilen, S2-Teilen) für beide Spieler besser als die Kombination
                (S1-Steal, S2-Steal). Doch unter den beschriebenen Bedingungen
                wäre „Teilen“ kein individuell rationales Verhalten, da beide
                keinen bindenden Vertrag eingehen können. Folglich muss eine
                Lösung so gestaltet sein, dass keiner der Spieler ein Interesse
                daran hat, von ihr abzuweichen. Die Kombination, bei der beide
                Teile erfüllt sind, hat diese Eigenschaft nicht. Angenommen
                Spieler 2 teilt, dann profitiert Spieler 1 mehr, wenn er
                stiehlt. Aber auch falls beide stehlen, ist es besser, wenn
                Spieler 2 stiehlt. Das bedeutet, dass stehlen, unabhängig von
                der Entscheidung von Spieler 2, immer besser ist als zu teilen.
                Das gleiche gilt für Spieler 2. Somit ist es stehlen in diesem
                Spiel eine strikt dominante Strategie, da dies die beste
                Strategie für beide Spieler ist, unabhängig davon, was der
                andere Spieler macht.
              </p>
            </RedAccordion>
          </Accordion>
          <b>Fazit aus dem Spiel:</b>
          <p>
            "Split or Steal" demonstriert zentrale Konzepte der Spieltheorie wie
            das Gefangenendilemma. Die Lehre daraus ist, dass individuelle
            Rationalität oft zu suboptimalen Ergebnissen führt, wenn keine
            Möglichkeit zur sicheren Kooperation besteht.
          </p>
        </div>
      </div>
    </>
  );
}
