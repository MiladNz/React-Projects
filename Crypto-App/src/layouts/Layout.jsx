import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>React.js Course</p>
      </header>
      {children}
      <footer className={styles.footer}>Developed By MiladN with 🧡</footer>
    </>
  );
}

export default Layout;
