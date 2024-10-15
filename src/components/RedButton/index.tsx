import { Button, ButtonProps } from "react-bootstrap";
import styles from "./index.module.css";

export default function index({ children, className, ...other }: ButtonProps) {
  return (
    <Button className={(className ?? "") + ` ${styles.button}`} {...other}>
      {children}
    </Button>
  );
}
