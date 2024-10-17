import { Accordion, Form } from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";
import { GLOSSARY } from "../../glossary";
import { useState } from "react";
import RedAccordion from "../../components/RedAccordion";

export default function Glossary() {
  const [searchterm, setSearchterm] = useState("");

  return (
    <>
      <Header title="Glossar" />
      <div className={styles.container}>
        <Form.Control
          placeholder="Suchen..."
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
            <RedAccordion
              title={item.keywords[0]}
              eventKey={index.toString()}
              key={index}
            >
              {item.definition}
            </RedAccordion>
          ))}
        </Accordion>
      </div>
    </>
  );
}
