
import React from 'react'
import { MdClose } from 'react-icons/md';
function ProjectSelect({ clickedProject, resetModal, showModal, modalRef, closeModal, project }) {
    const handleClick = () => {
        resetModal()
        document.body.style.overflow = '';
    }
  return (
    <div ref={modalRef} onClick={closeModal} className="project-container">
            <div className="modal">
                <div style={{ backgroundColor: clickedProject.backgroundColor }} className="image">
                    <figure>
                        <img src={clickedProject.image} loading="lazy" alt={clickedProject.name} />
                     </figure>
                </div>
                <section className="content">
                    <h2>{clickedProject.name}</h2>
                    {clickedProject.thumbnailContent && <p className="description">{clickedProject.thumbnailContent.description}</p>}
                    <div className="tools">
                        <span className="title">Tools Used: </span>
                        <div className='toolwrap'>
                            {clickedProject.thumbnailContent && clickedProject.thumbnailContent.toolsUsed.map(tool => <span title={tool} className="tool">{tool}</span>)}
                        </div>
                    </div>
                    <div className="button">
                        {clickedProject.moreInformation && clickedProject.moreInformation.githubLink && <a href={clickedProject.moreInformation.githubLink} target="_blank" rel="noreferrer"><button className='btn'>Github Link</button></a>}
                        {clickedProject.moreInformation && clickedProject.moreInformation.websiteLink && <a href={clickedProject.moreInformation.websiteLink} target="_blank" rel="noreferrer"><button className='btn'>Visit Website</button></a>}
                    </div>
                    <span onClick={handleClick} aria-label="Close Modal" className="closemodal">
                        <MdClose size={30} />
                    </span>
                </section>
            </div>
        </div>
  )
}

export default ProjectSelect