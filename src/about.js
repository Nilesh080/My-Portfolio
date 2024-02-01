import React from 'react';
import about_me from "./images/about_me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import './css/about.css'

class About extends React.Component {
    render() {
        return(
            <section id="about">
                <h2>Get To Know</h2>
                <h1>About Me</h1>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={about_me} alt="About Me" />
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Education</h5>
                                <small>Bachelor's in Computer Engineering</small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>20+ projects</small>
                            </article>
                        </div>

                        <p>
                            Pursuing Bachelor's degree in Computer Engineering. 1650+ rating on LeetCode & 3⭐ CodeChef & Pupil on Codeforces.
                            Proficient in many languages such as C/C++, Python, JavaScript,. Projects done in MERN Stack.
                            Great at DSA, problem-solving & ReactJS. Aspiring to be a full-stack developer and currently mastering Backend and UI/UX.
                        </p>

                        <a href="https://github.com/Nilesh080" target="_blank" className="btn btn-primary">
                            View My Projects
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;