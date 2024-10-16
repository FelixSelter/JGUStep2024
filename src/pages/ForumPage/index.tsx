import { useParams } from "react-router-dom";
import { POSTS } from "../../forum";
import Header from "../../components/Header";
import { Form, FormControl } from "react-bootstrap";
import RedButton from "../../components/RedButton";

export default function Index() {
  const params = useParams();
  const post = POSTS[Number(params.postId)];
  return (
    <>
      <Header title="Forum" />
      <div style={{ padding: "5vmin", overflowY: "scroll" }}>
        <b>{post.title}</b>
        <p>{post.question}</p>
        <Form.Group>
          <Form.Label>Deine Antwort:</Form.Label>
          <FormControl as="textarea" style={{ height: "50vmin" }}></FormControl>
        </Form.Group>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <RedButton>Antworten</RedButton>
        </div>
      </div>
    </>
  );
}
