
import React,  { useState, useEffect, useCallback } from 'react'
import { MdClose } from 'react-icons/md';
import axios from 'axios';
function ProjectSelect({ clickedProject, resetModal, showModal, modalRef, closeModal, project }) {
    
    // const getProjectData = useCallback(async () => {
    //     const project = await axios.get('/projectsinfo.json').then(res => {
    //         const data = res.data.projects.filter(item => item.name === projectName)
    //         return data
    //     })
    //     setProject(project)
    // }, [projectName])

    const handleClick = () => {
        resetModal()
    }
    // useEffect(() => {
    //     getProjectData()
    // }, [getProjectData, showModal])
  return (
    <div ref={modalRef} onClick={closeModal} className="ProjectInfo">
            <div className="h-5/6 Modal w-9/12">
                <div style={{ backgroundColor: clickedProject.backgroundColor }} className="Image">
                    <figure>
                        <img src={clickedProject.image} loading="lazy" alt={clickedProject.name} />
                    </figure>
                </div>
                <section className="Content">
                    <h2>{clickedProject.name}</h2>
                    {clickedProject.thumbnailContent && <p className="description">{clickedProject.thumbnailContent.description}</p>}
                    <div className="tools">
                        <span className="title">Tools Used: </span>
                        <div>
                            {clickedProject.thumbnailContent && clickedProject.thumbnailContent.toolsUsed.map(tool => <span title={tool} className="tool">{tool}</span>)}
                        </div>
                    </div>
                    <div className="buttons">
                        {clickedProject.moreInformation && clickedProject.moreInformation.githubLink && <a href={clickedProject.moreInformation.githubLink}><button>Github Link</button></a>}
                        {clickedProject.moreInformation && clickedProject.moreInformation.websiteLink && <a href={clickedProject.moreInformation.websiteLink}><button>Visit Website</button></a>}
                    </div>
                    <span onClick={handleClick} aria-label="Close Modal" className="CloseModal">
                        <MdClose />
                    </span>
                </section>
            </div>
        </div>
  )
}

export default ProjectSelect