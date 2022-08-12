import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Projects() {

    const gitHubURL = "https://api.github.com/users/JasOffen/repos?sort=updated&direction=des&per_page=5"
    const [repos, setRepos] = useState([])
    const [repoLoading, setLoading] = useState([])
    const [userData, setUserData] = useState([])
    const [userLoading, setUserLoading] = useState([])
    // get GitHub Repo data
    const getGitRepos = async () => {
        const response = await fetch(gitHubURL)
        const json = await response.json()
        try {
            setRepos(json)
            if (response.ok) {
                setLoading(response)
            }
        } catch {
            console.log(`idk man there was an error!`)
        }
        console.log(json)
    }

    useEffect(() => { getGitRepos() }, [])
    // Check if we're still loading data
    if (!repoLoading) { return (<div uk-spinner="ratio: 3"></div>) } else {
        return (
            <section id="Project-Cards">
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="">
                    {repos.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className="uk-card-header">
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">{data.name}</h3>
                                        {/* format date here to be easier to read */}
                                        <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">{data.updated_at}</time></p>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>{data.description}</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href={data.url} class="uk-button uk-button-text">Go to Project</a>
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
