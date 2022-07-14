import React from "react";

function About() {
    return (
        <section>
        <div className="center" id="about">
            <h1 className="page-header">About Me</h1>
        </div>
        <div className="center">
            <img src={require('../../assets/images/profileImage.png')} className="photo" alt="profile" />
        </div>
        <div>
            <p>I have been in financial sales for over 10 years and am looking forward to transitioning to a career as a full stack software developer. I am used to dealing with client demands and deadlines from prior roles in sales and collections and I will bring the same customer centric approach to my next company. I work extremely efficiently under time constraints in a structured, fast paced environment.</p>
            <br></br>

            <p>In my personal life, I have been married since May 11th, 2013. I have 2 daughters, a 6 year old and a 1 week old. My hobbies include personal finance, below average golf, and being a movie and television connoisseur.</p>
        </div>
        </section>
    )
}

export default About;