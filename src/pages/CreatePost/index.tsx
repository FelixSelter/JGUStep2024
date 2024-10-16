import { Form } from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";
import RedButton from "../../components/RedButton";

export default function Index() {
  return (
    <>
      <Header title="Forum" />
      <div className={styles.container}>
        <Form className={styles.form} action="/forum">
          <Form.Group className="mb-3">
            <Form.Label>Titel:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Geben Sie den Titel Ihrer Frage ein"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Inhalt:</Form.Label>
            <Form.Control
              as="textarea"
              required
              type="text"
              style={{ minHeight: "40vh" }}
              placeholder="Erläutern Sie Ihre Frage ausführlich"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Geben Sie Ihre Mail Adresse ein, damit wir Sie über Antworten zu
              Ihrer Frage benachrichtigen können.
            </Form.Text>
          </Form.Group>

          <RedButton type="submit">Frage stellen</RedButton>
        </Form>
      </div>
    </>
  );
}
