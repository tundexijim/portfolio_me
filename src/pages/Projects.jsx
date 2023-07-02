import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import axios from "axios";
import ProjectSelect from '../components/ProjectSelect';
import ProjectTemplate from '../components/ProjectTemplate';
import TextContact from '../components/TextContact';
import data from '../projectsinfo.json';
import { NavLink } from "react-router-dom";
function Projects() {
const [projects, setProjects] = useState(data);
const [showModal, setShowModal] = useState(false);
const [clickedProject, setClickedProject] = useState([]);

// useEffect(() => {
//     axios.get("./projectinfo.json")
//       .then((res) => {setmydata(res.data)})
//       .catch((err) => console.log(err));
//   }, []);
function handleProjectSelection(singleproject) {
    setClickedProject(singleproject);
  }
  
const resetModal = () => {
    setShowModal(false);
    setClickedProject('')
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
    document.getElementsByTagName('body')[0].classList.add('overflow-auto');
}

//closing modal on escape key
const keyClose = useCallback(({ key }) => {
    if (key === 'Escape' && showModal) {
        resetModal()
    }
}, [showModal])

useLayoutEffect(() => {
    document.addEventListener('keydown', keyClose);
    return () => {
        document.removeEventListener('keydown', keyClose);
    }
}, [keyClose])

//closing modal on background click
const modalRef = useRef();
const closeModal = ({ target }) => {
    if (modalRef.current === target) {
        resetModal()
    }
};

return (
         <div className="ProjectsIndex">
            <h2 >Projects</h2>
            <div className="Projects">
                {projects && projects.map(project => <ProjectTemplate key={project.id} handleProjectSelection={handleProjectSelection} setShowModal={setShowModal} project={project} />)}
            </div>
            {showModal && clickedProject && <ProjectSelect clickedProject={clickedProject} resetModal={resetModal} showModal={showModal} modalRef={modalRef} closeModal={closeModal} setShowModal={setShowModal}/>}
           <TextContact />
        </div>
        
  )
}

export default Projects