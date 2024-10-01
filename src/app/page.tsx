import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./AboutMe/page";
import Experience from "./WorkExperience/page";
import ContactMe from "./ContactMe/page";
import Links from "./Links";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <main className={styles.main}>
        <div className={styles.content}>
        <div className={styles.hello}>
          <p> Hi, my name is</p>
          <h2> Sai Arathy Chava. </h2>
          <h4> I'm a software engineer specialized in building exceptional user experiences. Currently, I'm doing my Master's in Computer Science at The University of Florida.</h4>
        </div>

        <section id="about"></section>
         <AboutMe/>
         <section id="experience">
         <Experience/>
         </section>
         <section id="skills">
         <Skills/>
         </section>
         <section id="projects">
         <Projects/>
         </section>
         <section id="contact">
            <ContactMe />
          </section>
         </div>

         <Links/>
      </main>
      <footer className={styles.footer}>
        <p> Built with Next.js, Tailwind CSS and Material UI. Coded in Visual Studio Code by yours truly. </p>
      </footer>
    </div>
  );
}
