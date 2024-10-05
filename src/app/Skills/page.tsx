import styles from './Skills.module.css';

interface Props{
    title: String,
    skills: String[]
}

function SkillSection(section: Props){
    return (
    <div className={styles.skillsection}>
        <h4> {section.title}</h4>
        <p> {section.skills.join(", ")} </p>
    </div>)
}

export default function Skills() {
    return (
      <div className={styles.skills}>
        <h2> MY SKILLS </h2>
        <div className={styles.skillsContentSections}>
        <SkillSection 
    title="Programming Languages"
    skills={["C/C++", "Python", "Kotlin", "Java", "HTML", "CSS", "JavaScript", "TypeScript"]}
/>
<SkillSection 
    title="Databases"
    skills={["SQL: MySQL, PostgreSQL, SQLite", "NoSQL: MongoDB, Prisma"]}
/>
<SkillSection 
    title="Web Development"
    skills={["React", "Next.js", "Node.js", "Express", "Spring Boot", "Tailwind CSS", "GraphQL"]}
/>
<SkillSection
    title="Android Development"
    skills={["Kotlin", "Android Studio", "Jetpack Compose", "Android Jetpack", "Dagger/Hilt", "Koin", "Coroutines"]}
/>
<SkillSection
    title="Frameworks & Tools"
    skills={["Git", "Gradle", "Cloudinary", "TensorFlow", "Tableau", "Microsoft Office", "Jira", "T3 Stack", "AJAX", "Axios", "Linux (Ubuntu)", "JFrog Artifactory", "Figma", "AWS"]}
/>

        </div>
      </div>
    );
  }
  