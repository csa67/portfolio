"use client";
import { useState } from 'react';
import styles from './Experience.module.css';

interface ExpCard {
    id: number;
    companyName: string;
    roleName: string;
    duration: string;
    description: string;
}

const experienceItems: ExpCard[] = [
    {
        id: 1,
        companyName: "University of Florida",
        roleName: "Web Developer, Graduate Student Assistant",
        duration: "Jun 2024 - Present",
        description: "Spearheaded the development of a React interface for the CERES-Maize model using TypeScript and Framer Motion. Integrated Tableau for dynamic data visualization, facilitating the exploration of 3 distinct agricultural scenarios. Managed the software development lifecycle from planning to deployment, achieving 99.9% uptime with AWS Amplify"
    },
    {
        id: 2,
        companyName: "Altitud",
        roleName: "Software Developer",
        duration: "Jul 2024 - Present",
        description: "Developed no-cost, industry-standard web applications for small local businesses, resulting in up to 50% increase in sales and 10x increase in customer outreach. Collaborated with 8 software engineers and UI/UX designers on the design and implementation of full stack applications using MongoDB, Express, React, and Node. Assisted the migration to Next.js and TypeScript, enhancing application performance through server-side rendering and static site generation, reducing page load times and improving user experience"
    },
    {
        id: 3,
        companyName: "Deloitte Digital",
        roleName: "Android Developer",
        duration: "Jul 2021 - Jul 2023",
        description: "Engineered 5+ custom Android apps for Fortune 500 clients using Java & Kotlin, employing Clean Architecture and MVVM in an Agile framework, serving associates in over 1,000 stores across 16 states. Refactored 70% of the UI codebase from XML to Jetpack Compose, improving UI performance and responsiveness. Optimized data handling by integrating GraphQL and REST APIs with Retrofit and OkHttp using Coroutines and flows. Leveraged Koin and Dagger for dependency injection, reducing boilerplate code by 30%. Improved app reliability with JUnit tests, raised code coverage to 85%, and conducted code reviews to ensure standards. Utilized Firebase Analytics to track user interactions and monitor app crashes, and streamlined deployment with GitHub Actions CI/CD and JFrog Artifactory. Collaborated with cross-functional teams and onboarded 3 members, providing KTs for seamless integration"
    },
    {
        id: 4,
        companyName: "NIT - Warangal",
        roleName: "Research Intern",
        duration: "May 2019 - Jul 2019",
        description: "Created a synthetic workload generation pipeline with CLOUDGEN, enabling the simulation of diverse workload patterns. Presented an ensemble-based workload forecasting method using LSTM and Random Forests in Python. Reduced error rates by 15% through optimized prediction models and dynamic resource management"
    },
    {
        id: 5,
        companyName: "NIT - AP",
        roleName: "Joint Secretary, Computer Science Engineering Association",
        duration: "Jun 2018 - Jul 2019",
        description: "Managed a team of 20 members in the association, coordinating activities and fostering collaboration among members. Organized 10+ workshops and paper presentations to enhance learning and engagement within the department. Facilitated communication between students and faculty, ensuring the smooth execution of events and initiatives"
    }
];

export default function Experience() {
    const [selectedId, setSelectedId] = useState<number>(experienceItems[0].id);
    const selectedExperience = experienceItems.find(exp => exp.id === selectedId);

    return (
        <div className={styles.experience}>
            <h2>What I do</h2>
            <div className={styles.experienceContent}>
                <div className={styles.companyList}>
                    {experienceItems.map((exp) => (
                        <a 
                            key={exp.id} 
                            className={`${styles.companyItem} ${selectedId === exp.id ? styles.selected : ''}`}
                            onClick={() => setSelectedId(exp.id)}
                            role="button"
                            aria-haspopup="true"
                            aria-expanded={selectedId === exp.id}
                        >
                            {exp.companyName}
                        </a>
                    ))}
                </div>
                {selectedExperience && (
                    <div className={styles.roleDescription}>
                        <h3>{selectedExperience.roleName}</h3>
                        <p>{selectedExperience.duration}</p>
                        <ul>
                            {selectedExperience.description.split('. ').map((sentence, index) => (
                                <li key={index}>{sentence.trim()}.</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
