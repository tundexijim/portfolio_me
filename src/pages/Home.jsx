import React from 'react'
import homepageimg from '../asset/homepage/desktop/image-homepage-hero@2x.jpg'
import TextContact from '../components/TextContact';
import { NavLink } from "react-router-dom";
import { AiFillHtml5} from 'react-icons/ai';
import {DiReact, DiCss3, DiJavascript1, DiNodejsSmall} from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { GrGraphQl } from 'react-icons/gr'
import { FaBootstrap } from 'react-icons/fa'
import { SiMysql, SiPhp, SiExpress, SiApollographql, SiTailwindcss } from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
function Home() {
  return (
    <div className='home'>
        <div className="img-container">
          <img src={homepageimg} alt='img'/>
          <div className="inner">
            <h1>Hey, I'm Tunde. A frontend developer.</h1>
            <a className='about-btn' href='#about'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            <span>ABOUT ME</span>
            </a>
          </div>
        </div>
        <div className="about" id='about'>
          <h2>About Me</h2>
          <p> I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Klaipeda, Lithuania, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
          <NavLink to='/projects'><button className='btn'>Go To Portfolio</button></NavLink>
        </div>
        <div className="tools">
        <hr/>
          <h1>My Toolbox Of Skills</h1>
          <p>A collection of web building tools and technologies I'm comfortable working with:</p>
          <div className="toolbox">
            <div className="tool">< AiFillHtml5 size={80} /><span>HTML5</span></div>
            <div className="tool">< DiCss3 size={80} /><span>CSS</span></div>
            <div className="tool">< DiJavascript1 size={80} /><span>JAVASCRIPT</span></div>
            <div className="tool">< DiReact size={80} /><span>REACT</span></div>
            <div className="tool">< BsGit size={80} /><span>GIT</span></div>
            <div className="tool">< GrGraphQl size={80} /><span>GRAPHQL</span></div>
            <div className="tool">< FaBootstrap size={80} /><span>BOOTSTRAP</span></div>
            <div className="tool">< SiMysql size={80} /><span>MYSQL</span></div>
            <div className="tool">< DiNodejsSmall size={80} /><span>NODEJS</span></div>
            <div className="tool">< SiPhp size={80} /><span>PHP</span></div>
            <div className="tool">< SiExpress size={80} /><span>EXPRESSJS</span></div>
            <div className="tool">< SiApollographql size={80} /><span>APOLLOGRAPHQL</span></div>
            <div className="tool">< TbBrandNextjs size={80} /><span>NEXTJS</span></div>
            <div className="tool">< SiTailwindcss size={80} /><span>TAILWINDCSS</span></div>
          </div>
        <hr/>
        </div>
       <TextContact />
    </div>
    
  )
}

export default Home