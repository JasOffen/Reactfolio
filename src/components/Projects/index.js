import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Projects({ gitData, gitLoading, gitError }) {

    if (gitError) {
        return (
            <div>
                Error!
            </div>
        )
    }
    if (gitLoading) {
        return (
            <div>
                {console.log(gitLoading)}
            </div>
        )
    }
    if (gitData) {

        return (
            <section id="Project-Cards" className="uk-flex uk-flex-center" uk-parallax="bgy: -200" >
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="">
                    {gitData.map((data) => {
                        if(data.description < 1){
                            data.description = "Unfortunately there is no description for this project. Please review the ReadMe on my GitHub!"
                        }
                        return (
                            <div key={data.id}>
                                <div class="uk-card uk-card-default uk-card-body">
                                    {/* <div class="uk-card-badge uk-label">Badge</div> */}
                                    <h3 class="uk-card-title">{data.name}</h3>
                                    <p>{data.description}</p>
                                    {/* gets the html url for the github project */}
                                    <a href={data.html_url} class="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Projects
