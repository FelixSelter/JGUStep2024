import styles from "./index.module.css";

export default function index({ title }: { title: string }) {
  return (
    <>
      <div className={styles.header}>
        <span>{title}</span>
        <img
          src="/JGUStep2024/logo.png"
          style={{
            height: "15vmin",
          }}
        />
      </div>
      <img
        src="/JGUStep2024/wave.png"
        style={{
          width: "100%",
          position: "relative",
        }}
      />
    </>
  );
}
