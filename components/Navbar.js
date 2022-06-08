import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/logo.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={Logo} width={75} height={75} alt="logo" />
          <p>Williams</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/">Work</Link>{" "}
          </li>
          <li className={styles.link}>
            <Link href="/">About</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
