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
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Next.js","tailwind CSS","React","trpc","prisma","postgres"]  
    },
    {
        id:2,
        title:"Watch Now",
        projectUrl: "",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Kotlin","Android","MVVM"]  
    },
    {
        id:3,
        title:"E-learning Web platform",
        projectUrl: "",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Node.js","React","MondoDB"]  
    },
    {
        id:4,
        title:"Calderon bulldogs",
        projectUrl: "",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Next.js","tailwind CSS","React","trpc","prisma","postgres"]  
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