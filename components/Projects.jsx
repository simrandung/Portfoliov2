import React, {useEffect} from 'react';
import styled from 'styled-components';
import Title from './Title';
import prj1 from '../assets/prj1.jpg';
import prj2 from '../assets/prj2.jpg';
import prj3 from '../assets/prj3.png';
import prj4 from '../assets/prj4.jpeg';
import prj5 from '../assets/prj5.jpg';
import prj6 from '../assets/prj6.jpg';
import prj7 from '../assets/prj7.jpg';
import { motion, useAnimation } from 'framer-motion';
// import { useScroll } from './useScroll';
import { projectAnimation } from '../animation';

function Projects() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const projectData = [
    {
      image: prj1,
      description: 'Simrans Kitchen',
      github: 'https://github.com/user/project1',
      additionalLink: 'https://live-demo.com/project1'
    },
    {
      image: prj2,
      description: 'Chat-Application- Using MERN',
      github: 'https://github.com/user/project2',
      additionalLink: 'https://live-demo.com/project2'
    },
    {
      image: prj3,
      description: 'Airtable Data Migration',
      github: 'https://github.com/simrandung/Api-Using-Mongodb',
      additionalLink: 'https://drive.google.com/file/d/1qafjXdMomCUF5q4faAFBkuoIY1rFc7U3/view?usp=drive_link'
    },
    {
      image: prj4,
      description: 'Course Management System Using JAVA',
      github: 'https://github.com/user/project4'
    },
    {
      image: prj5,
      description: 'Voice Assistant Using Python',
      github: 'https://github.com/user/project5',
      additionalLink: 'https://live-demo.com/project5'
    },
    {
      image: prj6,
      description: 'Puppeteer',
      github: 'https://github.com/simrandung/Puppeteer',
      additionalLink: 'https://drive.google.com/drive/folders/1J7n8F4hBgLIU0gY6ldSNiHq36CyTIidy?usp=drive_link'
    },
    {
      image: prj7,
      description: 'Portfolio-version 1',
      github: 'https://github.com/simrandung/Portfolio',
      additionalLink: 'https://simrandung-portfolio.netlify.app/'
    }
  ];

  return (
    <Section id="projects">
      <Title value="Projects" />
      <div className='projects__title'>
        <p>My Work</p>
        <h2>Check my awesome projects</h2>
      </div>
      <div className='grid'>
        {projectData.map(({ image, description, github, additionalLink }, index) => (
          <motion.div 
            key={index} className={`child-${index + 1} grid-box`}
            variants={projectAnimation}
            initial="hidden"
            animate={controls}
            transition={{
              delay: 0.03 * index,
              type: "tween",
              duration: 0.8,
            }}
            whileInView={{ opacity: 1 }}
          >
            <img src={image} alt={`prj${index + 1}`} />
            <div className="overlay">
              <div className="text">{description}</div>
              <a href={github} target="_blank" rel="noopener noreferrer">
                Check on GitHub
              </a>
              <a href={additionalLink} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
padding: 2rem;
.sideTitle{
  color:white;
}
.projects__title{
  margin:5rem 15rem;
  p{
    color: var(--secondary-color);
    text-transform:uppercase;
    letter-spacing:0.2rem;
    margin-top:-0.8rem;
    margin-bottom:1rem;
  }
  h2{
    color:var(--secondary-color);
    font-size: 2rem;
  }
}
.grid{
  padding:0 15rem;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
  "one one two two"
  "one one three four"
  "five six seven seven"
  "eight six seven seven";
  gap:1rem;
  .grid-box{
    position:relative;
    height:15rem;
    width:100%;
    background-color:var(--primary-color);
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    cursor:pointer;
    img{
      transition:0.4s ease-in-out;
    }
    &:hover{
      img{
        transform: scale(1.1);
        filter: blur(2px);
      }
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--secondary-color);
      }

      &:hover .overlay {
        opacity: 1;
      }

      .text {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: white
      }

      a {
        color: white;
        text-decoration: underline;
        font-size: 1.2rem;
        &:not(:last-of-type) {
          margin-bottom: 0.5rem;
        }
      }
    &:nth-of-type(1){
      grid-area: one;
      height:100%;
      background-color: #f5f5dc;
      z-index:10;
    }
    &:nth-of-type(2){
      grid-area: two;
      background-color: #f5deb3;
    }
    &:nth-of-type(3){
      grid-area: three;
      background-color: #f5f5dc;
    }
    &:nth-of-type(4){
      grid-area: four;
      background-color: #f5deb3;
    }
    &:nth-of-type(5){
      grid-area: five;
      height:100%;
      background-color: #e3c9a9;
    }
    &:nth-of-type(6){
      grid-area: six;
      height:100%;
      background-color: #d2b48c;
    }
    &:nth-of-type(7){
      grid-area: seven;
      height:100%;
      background-color: #f5f5dc;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .projects__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 10rem !important;
      }
    }
  }
`;

export default Projects;
