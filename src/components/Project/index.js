const Project = ({projects}) => {

    return (

        <div className="projectList">
        {projects.map((project) => (
            <div key={project.name}>                
                <h3>{project.name}</h3>
                <img className="previewImg" src={project.thumbnail}/>
                <p>{project.description}</p>
                <p>Repo: <a href={project.link}>{project.repo}</a></p>
                <p>Live URL: <a href={project.link}>{project.link}</a></p>
                <hr/>
            </div>
            
        )
        )}
    </div>
    )

};

export default Project;