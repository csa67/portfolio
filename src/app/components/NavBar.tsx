"use client";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Me</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#experience" onClick={(e) => handleScroll(e, '#experience')}>Experience</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact Me</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
