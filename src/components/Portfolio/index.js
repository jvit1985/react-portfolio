import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: 'List Hub',
            description: 'An e-commerce store that allows users to upload products and purchase items and checkout using Stripe',
            image: 'list-hub.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Node',
                'Express',
                'MongoDB',
                'IndexedDB',
                'GraphQL',
                'React',
                'JSON Web Token',
                'Stripe'
            ],
            github: 'https://github.com/TonyT504/list-hub',
            deployed: 'https://stormy-ravine-51670.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            description: 'An app to track your income and expenses that utilizes IndexedDB to store transactions while offline',
            image: 'budget-tracker.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Node',
                'Express',
                'MongoDB',
                'IndexedDB',
            ],
            github: 'https://github.com/jvit1985/budget-tracker',
            deployed: 'https://warm-reef-32239.herokuapp.com',
        },
        {
            name: 'Huntsmen',
            description: 'A social media site for outdoor enthusiasts to connect, as well as a place to locate state parks by state abbreviation',
            image: 'huntsmen.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Node',
                'MongoDB',
                'RESTAPI',
                'MVC',
            ],
            github: 'https://github.com/jvit1985/huntsmen',
            deployed: 'https://huntsmen.herokuapp.com/',
        },
        {
            name: 'Tech Blog',
            description: 'A tech blog that allows users to post, react, and view other users posts as well as login and sign up based on if their a returning or new user',
            image: 'tech-blog.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Node',
                'MongoDB',
            ],
            github: 'https://github.com/jvit1985/tech-blog',
            deployed: 'https://guarded-garden-41223.herokuapp.com/',
        },
        {
            name: 'The Trending Ape',
            description: 'A site that allows users to search for stocks by ticker name and compares the trending stocks on reddit with actual stock performance',
            image: 'trending-ape.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Bulma',
                'Server-side APIs'
            ],
            github: 'https://github.com/jvit1985/trending-ape',
            deployed: 'https://samborski55.github.io/smu-bootcamp-group-project-one/',
        },
        {
            name: 'Know The Weather',
            description: 'A site that lets users search by city to get the current weather and 5 day forecast for that city and saves the city for the user as a clickable link',
            image: 'know-the-weather.jpg',
            technologies: [
                'HTML/CSS',
                'Javascript',
                'Bootstrap',
                '3rd party APIs',
            ],
            github: 'https://github.com/jvit1985/know-the-weather',
            deployed: 'https://jvit1985.github.io/know-the-weather/',
        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row center">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row center">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row center">
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