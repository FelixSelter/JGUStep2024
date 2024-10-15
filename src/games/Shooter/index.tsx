import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "game1.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button id="move">Move</button>
      <button id="shoot">Shoot</button>
      <div id="canvasParent"></div>
    </>
  );
}
