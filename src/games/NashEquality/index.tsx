import { Accordion, Form } from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";
import RedButton from "../../components/RedButton";
import RedAccordion from "../../components/RedAccordion";
import { useState } from "react";

enum State {
  Increment,
  Decrement,
  Keep,
  Original,
}

const examples = [
  {
    originalYou: 2.75,
    originalCompetition: 2.3,
    incrementYou: 4.99,
    incrementCompetition: 2.3,
    decrementYou: 1.5,
    decrementCompetition: 2.3,
    keepCompetition: 3.3,
    correct: State.Keep,
    explanation: (
      <div>
        <b>Niedrigpreis:</b>
        <p>
          Ein Gleichgewicht besteht, wenn beide den Preis niedrig ansetzen. Kein
          Unternehmen hat Interesse daran seinen Preis zu erhöhen, weil dies zu
          einem Verlust der Marktanteile führen würde, auch wenn es durch das
          einzelne Produkt mehr verdient.
        </p>
      </div>
    ),
  },
  {
    originalYou: 199,
    originalCompetition: 202,
    incrementYou: 256,
    incrementCompetition: 202,
    decrementYou: 150,
    decrementCompetition: 157,
    keepCompetition: 202,
    correct: State.Keep,
    explanation: (
      <div>
        <b>Hochpreis:</b>
        <p>
          Ein Gleichgewicht besteht, wenn beide den Preis hoch ansetzen. Eine
          Verringerung des Preises würde dazu führen, dass das andere
          Unternehmen ebenfalls seine Preise reduziert und beide folglich
          weniger verdienen. Dies würde in einer Preisspirale nach unten enden.
        </p>
      </div>
    ),
  },
  {
    originalYou: 50,
    originalCompetition: 30,
    incrementYou: 70,
    incrementCompetition: 30,
    decrementYou: 32,
    decrementCompetition: 30,
    keepCompetition: 30,
    correct: State.Decrement,
    explanation: (
      <div>
        <b>Gemischt:</b>
        <p>
          Es entsteht ein Ungleichgewicht, dadurch das die Konkurrenz ihren
          Preis verringert hat. Weshalb man selber gezwungen ist seine Strategie
          zu ändern.
        </p>
      </div>
    ),
  },
];

export default function Index() {
  const [value, setValue] = useState(0);
  const [state, setState] = useState(State.Original);

  function valueYou() {
    switch (state) {
      case State.Original:
        return examples[value].originalYou;
      case State.Increment:
        return examples[value].incrementYou;
      case State.Decrement:
        return examples[value].decrementYou;
      case State.Keep:
        return examples[value].originalYou;
    }
  }

  function valueCompetition() {
    switch (state) {
      case State.Original:
        return examples[value].originalCompetition;
      case State.Increment:
        return examples[value].incrementCompetition;
      case State.Decrement:
        return examples[value].decrementCompetition;
      case State.Keep:
        return examples[value].decrementCompetition;
    }
  }

  return (
    <>
      <Header title="Nash" />
      <div className={styles.container}>
        <p>
          In diesen Situationsbeispielen wird das NASH Gleichgewicht erklärt.
          Vergleiche den Preis, desselben Produkts, von deiner Firma mit dem von
          der Konkurrenz. Solltest du deinen Preis ändern um deine Marktanteile
          nicht zu verlieren?
        </p>
        <Form className={styles.form}>
          <Form.Select
            style={{ gridColumn: "1 / span 2" }}
            onChange={(e) => {
              setValue(Number(e.target.value));
              setState(State.Original);
            }}
          >
            <option value="0">Beispiel 1</option>
            <option value="1">Biespiel 2</option>
            <option value="2">Beispiel 3</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Du:</Form.Label>
            <Form.Control type="text" value={`${valueYou()}€`} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Konkurrenz:</Form.Label>
            <Form.Control
              type="text"
              value={`${valueCompetition()}€`}
              readOnly
            />
          </Form.Group>
          <span style={{ gridColumn: "1 / span 2", textAlign: "center" }}>
            Deinen Preis
          </span>
          <RedButton
            style={{ gridColumn: "1 / span 2", margin: "0px" }}
            onClick={() => setState(State.Increment)}
          >
            erhöhen
          </RedButton>
          <RedButton
            style={{ gridColumn: "1 / span 2", margin: "0px" }}
            onClick={() => setState(State.Decrement)}
          >
            verringern
          </RedButton>
          <RedButton
            style={{ gridColumn: "1 / span 2", margin: "0px" }}
            onClick={() => setState(State.Keep)}
          >
            behalten
          </RedButton>
          {state !== State.Original && (
            <p style={{ textAlign: "left", gridColumn: "1 / span 2" }}>
              {examples[value].correct === state
                ? "Das ist die schlauste Strategie"
                : "Denk lieber nochmal nach"}
            </p>
          )}
          <Accordion style={{ gridColumn: "1 / span 2" }}>
            <RedAccordion title={"Erklärung"} eventKey="">
              {examples[value].explanation}
            </RedAccordion>
          </Accordion>
        </Form>
        <div style={{ marginTop: "5vmin" }}>
          <b>NASH-Gleichgewicht</b>
          <p>
            Bei einem NASH-Gleichgewicht hat keine Partei einen Anreiz seine
            Strategie zu ändern, vorausgesetzt die andere Partei ändert ihre
            auch nicht. Jeder Spieler wählt also die für ihn beste Antwort auf
            die Strategien der anderen Spieler.
          </p>
        </div>
      </div>
    </>
  );
}
