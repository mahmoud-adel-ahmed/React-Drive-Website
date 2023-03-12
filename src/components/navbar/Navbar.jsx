import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={logo} alt="/" />
      <nav>
        <ul
          className={
            // nav ? [styles.menu, styles.active].join(" ") : `${styles.menu}`
            nav ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          <li>
            <Link to="/">learn more</Link>
          </li>
          <li>
            <Link to="/">sign up</Link>
          </li>
          <li>
            <Link to="/">log in</Link>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "5px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "5px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
