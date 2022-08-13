// CSS:
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        Created by{" "}
        <a href="http://github.com/rockysfairat">Ålexander Yurchenko</a>
      </p>
    </footer>
  );
};

export default Footer;
