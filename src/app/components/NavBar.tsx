"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
                </div>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <a href="#about" onClick={(e) => { handleScroll(e, '#about'); setIsMenuOpen(false); }}>About Me</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#experience" onClick={(e) => { handleScroll(e, '#experience'); setIsMenuOpen(false); }}>Experience</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#skills" onClick={(e) => { handleScroll(e, '#skills'); setIsMenuOpen(false); }}>Skills</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#projects" onClick={(e) => { handleScroll(e, '#projects'); setIsMenuOpen(false); }}>Projects</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact" onClick={(e) => { handleScroll(e, '#contact'); setIsMenuOpen(false); }}>Contact Me</a>
                    </li>
                </ul>
            </nav>
            {isMenuOpen && (
                <div className={styles.fullScreenMenu}>
                    <ul className={styles.fullMenuList}>
                        <li className={styles.fullMenuItem}>
                            <a href="#about" onClick={(e) => { handleScroll(e, '#about'); setIsMenuOpen(false); }}>About Me</a>
                        </li>
                        <li className={styles.fullMenuItem}>
                            <a href="#experience" onClick={(e) => { handleScroll(e, '#experience'); setIsMenuOpen(false); }}>Experience</a>
                        </li>
                        <li className={styles.fullMenuItem}>
                            <a href="#skills" onClick={(e) => { handleScroll(e, '#skills'); setIsMenuOpen(false); }}>Skills</a>
                        </li>
                        <li className={styles.fullMenuItem}>
                            <a href="#projects" onClick={(e) => { handleScroll(e, '#projects'); setIsMenuOpen(false); }}>Projects</a>
                        </li>
                        <li className={styles.fullMenuItem}>
                            <a href="#contact" onClick={(e) => { handleScroll(e, '#contact'); setIsMenuOpen(false); }}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;
