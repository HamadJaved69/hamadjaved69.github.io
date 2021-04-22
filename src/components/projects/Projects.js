import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://api.github.com/users/hamadjaved69/repos')
            .then(res => res.json())
            .then(res => {
                setRepos(res);
                setLoading(false);
            })
    }, [])
    return (
        <div className="container projects" id="projects">
            <h2>Projects</h2>
            <div className="row">
                {
                    repos.map((repo, index) => (
                        <div className="col-md-4 mb-4">
                            <a href={repo.homepage} className="card-link" target="_blank" rel="noreferrer">
                                <div className="project-card">
                                    <h5>{repo.name}</h5>
                                    <p>{repo.description}</p>
                                    <div className="project-actions">
                                        <div>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiIvPjwvc3ZnPg==" alt="forks" />
                                            <span>{repo.forks}</span>
                                        </div>
                                        <div>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NEwxNCA2eiIvPjwvc3ZnPg==" alt="stars" />
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
            {
                loading &&
                <div class="d-flex justify-content-center text-light">
                    <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Projects;