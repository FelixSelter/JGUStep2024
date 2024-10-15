import { useState } from "react";
import {
  Alert,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

function delay(delay: number) {
  return new Promise((r) => {
    setTimeout(r, delay);
  });
}

export default function TwoButtonsGame() {
  const [radioValue, setRadioValue] = useState<"green" | "red" | null>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [EE, setAT] = useState("");

  async function timedAlert() {
    setAlertVisible(true);
    await delay(6000);
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
  const auswerten = () => {
    const computerAnswer: "green" | "red" = "red";

    if (radioValue === null) {
      setAT("Bitte erst eine der beiden Optionen aussuchen.");
      timedAlert();
      return;
    }

    setAT(results[radioValue as "green" | "red"][computerAnswer]);
    timedAlert();
  };

  return (
    <div>
      <ToggleButtonGroup
        type="radio"
        name="options"
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        defaultValue={radioValue}
      >
        <ToggleButton variant="success" id="radio-1" value="green">
          Split
        </ToggleButton>
        <ToggleButton variant="danger" id="radio-2" value="red">
          Steal
        </ToggleButton>
      </ToggleButtonGroup>

      <Button
        disabled={alertVisible}
        variant="outline-dark"
        onClick={auswerten}
      >
        Auswerten
      </Button>
      <Alert variant="info" show={alertVisible}>
        {EE}
      </Alert>
    </div>
  );
}
