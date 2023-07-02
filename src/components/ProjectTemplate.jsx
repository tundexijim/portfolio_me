import React from 'react'

function ProjectTemplate({ project, setShowModal, handleProjectSelection }) {
    const handleClick = () => {
        handleProjectSelection(project)
        setShowModal(true);
        document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    }
  return (
    <div style={{ backgroundColor: project.backgroundColor }} className="ProjectTemplate">
      <figure>
        <img src={project.image} loading="lazy" alt={project.name} className="group-hover:opacity-10" />
      </figure>
    <div data-hover-state className="textContent">
        <h3>{project.name}</h3>
        <p className="description">{project.thumbnailContent.description}</p>
        <button onClick={handleClick}>VIEW PROJECT</button>
    </div>
    </div>
  )
}

export default ProjectTemplate