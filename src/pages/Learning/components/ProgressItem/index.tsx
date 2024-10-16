import styles from "./index.module.css";
import RedButton from "../../../../components/RedButton";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  index: number;
  href?: string;
  completed: boolean;
}

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export default function ProgressItem({ title, index, href, completed }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [inititalAnimationCompleted, setInititalAnimationCompleted] =
    useState(false);
  const [initialAnimationStarted, setInitialAnimationStarted] = useState(false);

  useEffect(() => {
    //never null because executed only after render
    const performInitialAnimation =
      isFirstRender && isElementInViewport(ref.current!);
    if (initialAnimationStarted && !inititalAnimationCompleted) return;

    const delay = performInitialAnimation ? index * 0.15 : 0.15;
    animate(ref.current, { x: [100, 0], opacity: [0, 1] }, { delay }).then(() =>
      setInititalAnimationCompleted(true)
    );
    if (performInitialAnimation) setInitialAnimationStarted(true);

    if (isFirstRender) setIsFirstRender(false);
  }, [isInView]);

  return (
    <div className={styles.itemRow}>
      <div className={styles.bars}>
        {index === 0 && <div className={styles.horizontalbar} />}
        <div className={styles.verticalbar} />
        <div className={styles.horizontalbar} />
        <div className={styles.verticalbar} />
      </div>
      <div
        ref={ref}
        style={{ display: "flex", gap: "2vmin", alignItems: "center" }}
      >
        {index === 0 && <div style={{ height: "10vmin" }} />}
        <RedButton size="lg" className="buttonAnim" href={href} style={{width:"50vw"}}>
          {title}
        </RedButton>
        {completed && (
          <FontAwesomeIcon
            icon={faCheck}
            className={styles.checkmark}
            style={{ color: "var(--red)" }}
          />
        )}
      </div>
    </div>
  );
}
