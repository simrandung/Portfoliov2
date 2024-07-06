import React, { useEffect } from 'react';
import styled from 'styled-components';
import skills from '../assets/skills.jpg';
import Title from './Title';
import { motion, useAnimation } from 'framer-motion';
import { skillsBarAnimations } from '../animation';

function Skills() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);
  const skillsData = [
    {
      name: "Mern Stack",
      amount: 90,
    },
    {
      name: "Java",
      amount: 80,
    },
    {
      name: "Python",
      amount: 60,
    },
    {
      name: "DSA",
      amount: 70,
    },
    {
      name: "Puppeteer",
      amount: 75,
    },
    {
      name: "RPA",
      amount: 65,
    },
    {
      name: "API",
      amount: 85,
    },
    {
      name: "Design",
      amount: 55,
    },
    {
      name: "Creativity",
      amount: 70,
    }

  ];
  return (
    <Section id='skills'>
      <Title value="skills" />
      <div className='background'>
        <img src={skills} alt='skills design' className='design'></img>
      </div>
      <div className='skills_title'>
        <p>My Skills</p>
        <h2>Check my awesome skills</h2>
      </div>
      <div className='skills'>
        <div className='skills_bars'>
          {
            skillsData.map(({ name, amount }) => {
              return (
                <motion.div className='skills_bars_bar' key={name}
                  variants={skillsBarAnimations}
                  animate={controls}
                  initial="hidden"
                  transition={{
                    delay: 0.03,
                    type: "tween",
                    duration: 0.8,
                  }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className='container'>
                    <progress value={amount} max="100" />
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
              );
            })
          }
        </div>
        {/* <div className='skills_content'>
        <p className='title'>

        </p>
      </div> */}
      </div>
      <div className="skills__content">
        <p className="title">
          Core Skills Overview
        </p>
        <p className="description">

          Proficient in MERN Stack, Java, and Python programming languages, with expertise in Data Structures & Algorithms (DSA). Experienced in Puppeteer for web scraping and automation, and Robotic Process Automation (RPA) for streamlining workflows. Skilled in API integration for connecting different software systems, and adept in Design and Creativity for UI/UX enhancements and innovative solutions.
        </p>
      </div>


    </Section>
  )
}

const Section = styled.section`
position:relative;
min-height: 100vh;
height:140vh
overflow: hidden;
padding:2rem;

.background {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:-1;
  overflow:hidden;

  .design{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity: 1;
  }
}
${'' /* .sideTitle{
  h1{
    font-size:10rem;
    z-index:2;
  }
} */}
  .skills_title {
    ${'' /* display:none; */}
    padding-left: 6rem 10rem;
    p {
      text-transform:uppercase;
      letter-spacing:0.2rem;
      color:rgb(32, 45, 84);
      ${'' /* margin-bottom:3rem;
      margin-top: 1rem; */}
      padding-top:1rem;
    }
    h2{
      color: rgb(32, 45, 84);
      font-size: 2.5rem;
      padding-top:1rem;
      padding-left:1rem;
    }
  }
  .skills{
    display:flex;
    padding-left:35rem;
    gap:10rem;
    height:50vh;
    &_bars{
      transform: rotate(-90deg);
      width:max-content;
      height:max-content;
      display:flex;
      flex-direction: column;
      gap: 4rem;
      margin-top:-20rem;


      &_bar{
        display:flex;
        flex-direction: row-reverse;
        gap:1rem;
        ${'' /* height:3rem;
        margin-left:1rem; */}

        .container{
          display:flex;
          flex-direction:column;
          gap:2rem;
          
          
          progress{
            width:20rem;
            -webkit-appearance: none;
            appearance:none;
            &::-webkit-progress-bar {
              height:3rem;
              background-color:white;
            }
            &::-webkit-progress-value {
              background-color:var(--secondary-color);
            }
          }
          span{
            text-transform:uppercase;
            letter-spacing:0.2rem;
            color:rgb(32, 45, 84);
            margin-top:1rem;
          }
          
        }
        
        h3{
          transform:rotate(90deg);
          color:var(--secondary-color);
          font-size:1.8rem;
        }
      }
    }

    &__content {
      padding-top: 10rem;
      ${'' /* z-index:1; */}
      text-align:center;
      p {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: rgb(32, 45, 84);
      }
      .title {
        font-weight: bolder;
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }

    .skills_title {
      padding: 3rem 0;
      text-align: center;

      h2 {
        font-size: 2rem;
      }
    }

    .skills {
      padding: 0;
      gap: 2rem;

      &_bars {
        padding: 8rem;
        margin-left:5rem;
        gap: 0rem;

        &_bar {
          .container {
            gap: 1rem;

            progress {
              width: 12rem;
              height: 1rem;

              &::-webkit-progress-bar {
                height: 0.3rem;
              }
              span{
                padding:2rem;
              }
            }
          }

          h3 {
            font-size: 1rem;
          }
        }
      }

      &__content {
        padding: 0 1rem;
      }
    }
  }

`;

export default Skills;
