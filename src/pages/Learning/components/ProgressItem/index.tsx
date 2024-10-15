import styles from "./index.module.css";
import RedButton from "../../../../components/RedButton";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  index: number;
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

export default function ProgressItem({ title, index }: Props) {
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
      <div ref={ref}>
        {index === 0 && <div style={{ height: "2vmin" }} />}
        <RedButton size="lg" className="buttonAnim">
          {title}
        </RedButton>
      </div>
    </div>
  );
}
