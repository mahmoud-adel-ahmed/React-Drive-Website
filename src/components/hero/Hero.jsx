import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.where}>
          <label>Where</label>
          <input type="text" placeholder="Search Location" />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_icon}>
          <AiOutlineSearch />
          <button>Search for Cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
