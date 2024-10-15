import { Accordion, Card, Form, useAccordionButton } from "react-bootstrap";
import Header from "../../components/Header";
import Layout from "../../layout";
import styles from "./index.module.css";
import { GLOSSARY } from "../../glossary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Item({
  eventKey,
  item,
}: {
  item: { definition: string; keywords: string[] };
  eventKey: string;
}) {
  const onClick = useAccordionButton(eventKey, () => {});

  return (
    <Card>
      <Card.Header className={styles.itemHeader} onClick={onClick}>
        {item.keywords[0]}
        <button type="button" className={styles.itemButton} onClick={onClick}>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: "var(--red)" }} />
        </button>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{item.definition}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default function Glossary() {
  const [searchterm, setSearchterm] = useState("");

  return (
    <>
      <Header title="Glossar" />
      <div className={styles.container}>
        <Form.Control
          placeholder="...suchen"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          className={styles.input}
        />
        <Accordion className={styles.itemContainer}>
          {GLOSSARY.filter((item) =>
            item.keywords.some((keyword) =>
              keyword.toLowerCase().includes(searchterm.toLowerCase())
            )
          ).map((item, index) => (
            <Item item={item} eventKey={index.toString()} key={index} />
          ))}
        </Accordion>
      </div>
    </>
  );
}
