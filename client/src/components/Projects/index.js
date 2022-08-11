import React, { useState, useEffect } from "react";


function Projects() {

    const gitHubURL = "https://api.github.com/users/JasOffen/repos"
    const [repos, setRepos ] = useState([])
    const [repoLoading, setLoading ] = useState([])
    const [userData, setUserData] = useState([])
    const [userLoading, setUserLoading] = useState([])
    // get GitHub Repo data
    const getGitRepos = async () => {
        const response = await fetch(gitHubURL)
        const json = await response.json()
        setRepos(json)
        if(response.ok){
            setLoading(response)
        }
    }

    useEffect(() => { getGitRepos()}, [])
        // Check if we're still loading data
        if(!repoLoading){return(<div>Loading...</div>)}else{
        return (
            <section id="Project-Cards">
                {repos.map((data) => {
                    return(
                    <div key = {data.id} class="uk-card uk-card-body">
                        <a href={data.html_url} target="_blank" rel="noreferrer">{data.name}</a>
                    </div>
                    )
                })}
            </section>
        )
            }
}

export default Projects
