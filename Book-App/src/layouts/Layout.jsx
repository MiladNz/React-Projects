import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>React.js course | Learn and Excercise </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By MiladNz with 🧡</p>
      </footer>
    </>
  );
}

export default Layout;
