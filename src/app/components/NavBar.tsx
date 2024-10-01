import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="#about">About Me</Link>
                </li>
                <li className={styles.navItem}><Link href="#experience">Experience</Link></li>
                <li className={styles.navItem}>
                    <Link href="#skills">Skills</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#projects">Projects</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;