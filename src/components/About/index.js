import React from "react";
import profileImage from '../../assets/profileImage.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={profileImage} className="my-2" style={{ width: "100%" }} alt="profile" />
        </section>
    )
}

export default About;