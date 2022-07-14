import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href={require('../../assets/files/resume Resume.pdf')} download>
                    <h4>Download My Resume</h4>
                </a>
            </div>
            <div>
                <h5>Technologies</h5>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Model View Controller(MVC)</li>
                    <li>REST</li>
                    <li>Progressive Web Applications(PWA)</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>IndexedDB</li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;