import React from "react";

function About() {
    return (
        <section id='About'>
            <div class="uk-flex uk-flex-center uk-text-center">
                <div>
                    <h2>👋Hello👋</h2>
                    <p>My name is Jason Offenbaker. Im a Full Stack Developer with a passion for all things involving technology</p>
                    <p>Currently I'm getting into Machine Learning with Python and MatLabs, but heres some other things I've been learning aswell!</p>
                </div>
            </div>
            <div className="uk-child-width-expand@s uk-flex uk-flex-center" uk-grid="">
                <div className="uk-flex uk-flex-center">
                    <ul className="uk-list">
                        <h4>Languages</h4>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>PowerShell</li>
                    </ul>
                </div>
                <div className="uk-flex uk-flex-center">
                    <ul class="uk-list">
                        <h4>Libraries</h4>
                        <li>Jupyter</li>
                        <li>MatLab</li>
                        <li>Selenium</li>
                        <li>Git</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className="uk-flex uk-flex-center">
                    <ul class="uk-list">
                        <h4>Applications</h4>
                        <li>Unreal Engine</li>
                        <li>Unity</li>
                        <li>Office365 Administration</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Adobe Photoshop/Premier</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About