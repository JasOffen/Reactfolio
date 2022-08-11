import React from "react";

function Jumbo(){
    return(
        // Jumbotron section for a proud project
        <section id='Jumbo'>
            {/* Card div */}
            <div>
                {/* Badge of if its a group project or not maybe make this an if and have some variables to pass in*/}
                <div>
                    <p>Group</p>
                </div>
                {/* Title */}
                <div>
                    Project Title
                </div>
                {/* Image, and link to project live site */}
                <a href='' alt='Image of variable name' target="_blank">Project Image Goes Here</a>
                {/* Description. Pull from GitHub API or write here manually? */}
            </div>
            {/* add an underline */}
        </section>
    )
}

export default Jumbo