"use client";
import {useState} from 'react';

interface ExpCard{
    id: number;
    companyName: string;
    roleName: string;
    duration:string;
    description: string;
}

const experienceItems: ExpCard[] = 
    [
        {
            id: 1,
            companyName: "University of Florida",
            roleName: "Web developer, Graduate Student Assistant",
            duration: "Jun 2024 - Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet natus eaque fugit, labore nisi beatae ratione unde quaerat quisquam nostrum voluptate vel vitae delectus nobis, dolore maiores culpa! Debitis!"
        },
        {
            id: 2,
            companyName: "Altitud",
            roleName: "Software Developer",
            duration: "Jul 2024 - Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet natus eaque fugit, labore nisi beatae ratione unde quaerat quisquam nostrum voluptate vel vitae delectus nobis, dolore maiores culpa! Debitis!"
        },
        {
            id: 3,
            companyName: "Deloitte Digital",
            roleName: "Android Developer",
            duration: "Jul 2021 - Jul 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet natus eaque fugit, labore nisi beatae ratione unde quaerat quisquam nostrum voluptate vel vitae delectus nobis, dolore maiores culpa! Debitis!"
        },
        {
            id: 4,
            companyName: "NIT - Warangal",
            roleName: "Research Intern",
            duration: "May 2019 - Jul 2019",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet natus eaque fugit, labore nisi beatae ratione unde quaerat quisquam nostrum voluptate vel vitae delectus nobis, dolore maiores culpa! Debitis!"
        },
        {
            id: 5,
            companyName: "NIT - AP",
            roleName: "Joint Secretary, Computer Science Engineering Association",
            duration: "Jun 2018 - Jul 2019",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet natus eaque fugit, labore nisi beatae ratione unde quaerat quisquam nostrum voluptate vel vitae delectus nobis, dolore maiores culpa! Debitis!"
        }
    ]

export default function Experience(){
    const [selectedId, setSelectedId] = useState<number| null>(null);

    return (
        <div>
            <h2> WHAT I DO</h2>
            {experienceItems.map((exp) => (
                <div key={exp.id}>
                    <button onClick={() => setSelectedId(exp.id)}>
                        {exp.companyName}
                    </button>
                    {selectedId === exp.id && (
                        <div>
                            <h3>{exp.roleName}</h3>
                            <p>{exp.duration}</p>
                            <p>{exp.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}