
interface projectCard{
    id: number,
    title: String,
    description: String,
    skills: String[]
}
const projectsList: projectCard[] = [
    {
        id:1,
        title:"Calderon bulldogs",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Next.js","tailwind CSS","React","trpc","prisma","postgres"]  
    },
    {
        id:2,
        title:"Watch Now",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Kotlin","Android","MVVM"]  
    },
    {
        id:1,
        title:"E-learning Web platform",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Node.js","React","MondoDB"]  
    },
    {
        id:1,
        title:"Calderon bulldogs",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi pariatur culpa, nulla, asperiores, fugit ipsum et magni officia tempore libero rem necessitatibus exercitationem laboriosam deleniti suscipit voluptatem enim incidunt? ",
        skills: ["Next.js","tailwind CSS","React","trpc","prisma","postgres"]  
    }
]

export default function Projects(){
    return(
        <div>
            <h2> WHAT I'VE BUILT </h2>
            {
                projectsList.map((project) => (
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.skills.map((skill) => <div> <p>{skill}</p> </div>)}
                        </div>
                ))
            }
        </div>
    )
}