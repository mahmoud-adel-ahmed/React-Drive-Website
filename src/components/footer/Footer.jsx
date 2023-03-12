import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo_dark.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="/" />
        <button>Share a car</button>
      </div>
    </footer>
  );
};

export default Footer;
