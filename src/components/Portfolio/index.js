import React from "react";
import Project from "../Projects";

function Portfolio() {
    const projects = [
        {
            name: 'Project 1',
            description: 'Project 1 description',
            image: 'project-1.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 1 github link',
            deployed: 'Project 1 deployed link',
        },
        {
            name: 'Project 2',
            description: 'Project 2 description',
            image: 'project-2.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 2 github link',
            deployed: 'Project 2 deployed link',
        },
        {
            name: 'Project 3',
            description: 'Project 3 description',
            image: 'project-3.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 3 github link',
            deployed: 'Project 3 deployed link',
        },
        {
            name: 'Project 4',
            description: 'Project 4 description',
            image: 'project-4.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 4 github link',
            deployed: 'Project 4 deployed link',
        },
        {
            name: 'Project 5',
            description: 'Project 5 description',
            image: 'project-5.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 5 github link',
            deployed: 'Project 5 deployed link',
        },
        {
            name: 'Project 6',
            description: 'Project 6 description',
            image: 'project-6.png',
            technologies: [
                'HTML/CSS',
                'Javascript',
            ],
            github: 'Project 6 github link',
            deployed: 'Project 6 deployed link',
        },   
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;