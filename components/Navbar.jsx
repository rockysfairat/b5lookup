// React hooks:
import { useId } from "react";
// Next components:
import Link from "next/link";
import Image from "next/image";
// Data:
import { menu } from "../data/data";
import b5logo from "../public/images/b5logo.jpg";
// CSS:
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const id = useId();
  return (
    <nav className={styles.nav}>
      <Image
        src={b5logo}
        alt="Babylon 5 logo"
        width="120"
        height="20"
        objectFit="cover"
      />
      <ul className={styles.ul}>
        {menu.map((menuItem) => (
          <li className={styles.li} key={id + menuItem.text}>
            <Link href={menuItem.link}>
              <a className={styles.a}>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
