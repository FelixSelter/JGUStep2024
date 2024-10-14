import { OverlayTrigger, Popover } from "react-bootstrap";

interface Props {
  keyword: string;
}

export const GLOSSARY = [
  {
    keywords: ["Spiel"],
    definition: "Ein Spiel ist ....",
  },

  {
    keywords: ["Spieler"],
    definition: "Spieler sind ....",
  },
];

export default function index({ keyword }: Props) {
  const entry = GLOSSARY.find((entry) =>
    entry.keywords
      .map((keyword) => keyword.toLowerCase())
      .includes(keyword.toLowerCase())
  );
  if (entry === undefined) throw new Error(`${keyword} not found in glossary`);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{keyword}</Popover.Header>
      <Popover.Body>{entry.definition}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <a>{keyword}</a>
    </OverlayTrigger>
  );
}
