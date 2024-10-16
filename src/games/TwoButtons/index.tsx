import { useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Table,
  ToggleButton,
} from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";

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
          In diesem Spiel geht es darum, eine Millionen Euro zu gewinnen. Zwei
          Spielern werden 2 Buzzer zur Option gestellt.
        </p>
        <p>
          <h6 className={styles.green}>GRÜNER BUZZER „SPlIT“</h6>: die Million
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
        <p>
          <h6>Beschreibung:</h6>
          In diesem Beispiel wird angenommen, dass sich beide Spieler überhaupt
          nicht kennen und nicht miteinander kommunizieren. Sie haben keinen
          Einfluss aufeinander bis auf den Fakt, dass sie die andere Person
          nicht kennen und einander nicht trauen.
          <br />
          <br />
          In diesem Szenario gibt es drei Endergebnisse:
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
                SP1= 0,
                <br />
                SP2 = 0
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
        </div>
        <p>
          <b>Fazit aus dem Spiel:</b>
          <br />
          "Split or Steal" demonstriert zentrale Konzepte der Spieltheorie wie
          das Gefangenendilemma. Die Lehre daraus ist, dass individuelle
          Rationalität oft zu suboptimalen Ergebnissen führt, wenn keine
          Möglichkeit zur sicheren Kooperation besteht.
        </p>
      </div>
    </>
  );
}
