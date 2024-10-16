import { Card } from "react-bootstrap";
import Header from "../../components/Header";
import styles from "./index.module.css";
import RedButton from "../../components/RedButton";
import { POSTS } from "../../forum";

export default function Index() {
  return (
    <>
      <Header title="Forum" />
      <div className={styles.controls}>
        <RedButton href="createpost">Post erstellen</RedButton>
      </div>
      <div className={styles.cardContainer}>
        {POSTS.map((post, i) => (
          <Card className={styles.card} key={post.title}>
            <Card.Body>
              <Card.Title>
                <a href={`/forum/${i}`}>{post.title}</a>
              </Card.Title>
              <Card.Text className={styles.summary}>{post.question}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
