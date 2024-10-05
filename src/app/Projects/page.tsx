import styles from './Projects.module.css';
import { Folder, ExternalLink } from 'react-feather';

interface projectCard{
    id: number,
    title: String,
    projectUrl: string,
    description: String,
    skills: String[]
}

const projectsList: projectCard[] = [
    {
        id:1,
        title:"Calderon bulldogs",
        projectUrl: "",
        description: "Developed an e-commerce site for selling bulldogs, featuring user authentication and integrated payment options for secure transactions. ",
        skills: ["Next.js", "TailwindCSS", "React", "tRPC", "Prisma", "PostgreSQL"]  
    },
    {
        id:2,
        title:"Watch Now",
        projectUrl: "",
        description: "Built a movie discovery app allowing users to browse and create personalized watchlists, with efficient API communication and local data persistence.",
        skills: ["Android Jetpack", "Retrofit", "MVVM", "Kotlin", "XML", "RoomDB"]  
    },
    {
        id:3,
        title:"E-learning Web Platform",
        projectUrl: "",
        description: "Developed a responsive online learning platform, handling content storage and delivery through AWS S3, ensuring high availability with AWS EC2 deployment.",
        skills: ["Node.js","React","MongoDB","AWS"]  
    },
    {
        id:4,
        title:"Gator Library",
        projectUrl: "",
        description: "Designed a library management system to optimize book search and update times, reducing wait times for reservations with efficient data structures. ",
        skills: ["Java", "Red-Black Tree", "Binary Min-Heap"]  
    },
    {
        id:5,
        title:"Hangman",
        projectUrl: "",
        description: "Developed a Hangman game with a custom dynamic keyboard, utilizing an API for word selection and delivering real-time feedback on user input.",
        skills: ["Node.js", "React Native", "Expo", "TypeScript"]  
    },
    {
        id:6,
        title:"Chord Protocol Simulation",
        projectUrl: "",
        description: " Developed a scalable peer-to-peer lookup service using the Chord protocol, optimizing performance for distributed systems with consistent hashing and multithreading.",
        skills: ["F#", ".NET", "AKKA", "Distributed Systems"]  
    }
]

export default function Projects(){
    return(

        <div className={styles.projectSection}>
       
            <h2> WHAT I'VE BUILT </h2>
            <div className={styles.projects}>
            { 
                projectsList.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <div className={styles.projectLinks}>
                            <Folder size={24}/>
                            <ExternalLink size={20} className={styles.linkIcon}>
                                <a href={project.projectUrl}/>
                                </ExternalLink>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.projectSkills}> 
                        {project.skills.map((skill,index) => <p key={index} className={styles.projectSkillItem}>{skill}</p> )}
                        </div>
                        </div>
                ))
                
            }
            </div>
            <a href="https://github.com/csa67?tab=repositories" className={styles.showMoreButton}>Show More</a>
        </div>
    )
}