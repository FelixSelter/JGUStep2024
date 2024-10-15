import styles from "./index.module.css";

export default function index({ title }: { title: string }) {
  return (
    <>
      <div className={styles.header}>
        <span>{title}</span>
        <img
          src="logo.png"
          style={{
            height: "15vmin",
          }}
        />
      </div>
    </>
  );
}
