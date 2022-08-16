import React from "react";

function About() {
    return (
        <section id='About' className='uk-flex uk-flex-center'>
            <div className='uk-margin-large-top'>
                <div className='uk-card uk-card-default uk-card-body'>
                    <div class="uk-flex uk-flex-center uk-text-center">
                        <div className="uk-margin uk-margin-large-top ">
                            <h2>👋Hello👋</h2>
                            <p>My name is Jason Offenbaker. Im a Full Stack Developer with a passion for all things involving technology</p>
                            <p>Currently I'm getting into Machine Learning with Python and MatLabs, but heres some other things I've been learning aswell!</p>
                        </div>
                    </div>
                    <div className="uk-column-1-3 uk-flex uk-flex-between">
                        <div>
                            <ul className="uk-list">
                                <h4>Languages</h4>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>PowerShell</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                <h4>Libraries</h4>
                                <li>Jupyter</li>
                                <li>MatLab</li>
                                <li>Selenium</li>
                                <li>Git</li>
                                <li>Node</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                <h4>Applications</h4>
                                <li>Unreal Engine</li>
                                <li>Unity</li>
                                <li>Office365 Administration</li>
                                <li>GraphQL</li>
                                <li>MongoDB</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About