import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAccordionButton,
  Card,
  Accordion,
  CardProps,
} from "react-bootstrap";
import styles from "./index.module.css";

interface Props extends CardProps {
  title: string;
  eventKey: string;
}

export default function RedAccordion({
  eventKey,
  title,
  children,
  ...other
}: Props) {
  const onClick = useAccordionButton(eventKey, () => {});

  return (
    <Card {...other}>
      <Card.Header className={styles.itemHeader} onClick={onClick}>
        {title}
        <button type="button" className={styles.itemButton} onClick={onClick}>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: "var(--red)" }} />
        </button>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
