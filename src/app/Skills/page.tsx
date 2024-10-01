interface Props{
    title: String,
    skills: String[]
}

function SkillSection(section: Props){
    return (<div>
        <h4> {section.title}</h4>
        <p> {section.skills.join(", ")} </p>
    </div>)
}

export default function Skills() {
    return (
      <div>
        <h2> MY SKILLS </h2>
        <SkillSection
          title="Frontend Development"
          skills={["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <SkillSection
          title="Backend Development"
          skills={["Node.js", "Express", "Java", "Spring Boot", "SQL", "NoSQL"]}
        />
        <SkillSection
          title="Tools & Others"
          skills={["Git", "Docker", "Jenkins", "Prisma", "JFrog Artifactory"]}
        />
      </div>
    );
  }
  