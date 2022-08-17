import React from "react";

function Jumbo(){
    return(
        // Jumbotron section for a proud project
        <section id='Jumbo' className="uk-flex uk-flex-center">
            {/* Card div */}
            <div className='uk-card uk-card-default' ukgrid=''>
                {/* Badge of if its a group project or not maybe make this an if and have some variables to pass in*/}
                {/* Title */}
                <div className="uk-card-title">
                    Citizen Master
                    <span class="uk-badge">Group</span>
                </div>
                {/* Image, and link to project live site */}
                <a href='https://blitman12.github.io/Citizen-Master/' alt='Image of variable name' target="_blank" rel="noreferrer"><img src='./assets/images/citizenmaster.jpg'></img></a>
                {/* Description. Pull from GitHub API or write here manually? */}
            </div>
        </section>
    )
}

export default Jumbo