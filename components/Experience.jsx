import React , {useEffect} from 'react';
import company from '../assets/company.jpeg';
import styled from 'styled-components';
import Title from './Title';

// import { useScroll } from '../components/useScroll.jsx';
import { motion,useAnimation } from 'framer-motion';
import {experienceAnimations} from '../animation';

function Experience() {
  const controls = useAnimation();
  const infoControls = useAnimation();

  useEffect(() => {
    controls.start("show");
    infoControls.start("show");
  }, [controls, infoControls]);

  // const [element, controls] =useScroll();
  const data = [
    {
      type: "Qualyval Consulting",
      text: "Role : Software Developer\nCollaborated with cross-functional teams, contributed to documentation, and ensured application reliability.",
      image: company,
    },
    {
      type: "Qualyval Consulting",
      text: "Role : RPA Developer\nDeveloped and implemented RPA solutions using UiPath, automating manual processes and optimizing operational efficiency.",
      image: company,
    }

  ]
  return (
    <Section id="experiences">
      <Title value="experiences" />
      <div className='experiences'>
        {
          data.map(({ type, text, image }, index) => {
            return (
              <motion.div className='experiences__experience'
              variants={experienceAnimations}
              animate={controls}
              initial="hidden"
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              >
                <div className='experiences__image'>
                  <img src={image} alt='experience' />
                </div>
                <div className='experiences__title'>
                  <span>0{index + 1}</span>
                  <h2>{type}</h2>
                </div>
                <p className='experiences__description'>{text}</p>
              </motion.div>
            )
          })
        }

      </div>
    </Section>
  )
}

const Section = styled.section`
min-height:100vh;
.experiences {
  display:grid;
  grid-template-columns:repeat(2,1fr);
  align-items:center;
  height:100%;
  margin:0 14rem;
  margin-top:10rem;
  gap:5rem;
  &__experience {
    padding: 2rem;
    &:nth-of-type(2){
      ${'' /* display:none; */}
      background-color:#d2b48c;
      
      }
      .experiences__description{
        color:black;
      }
    }
    &__image img{
      margin-bottom:3rem;
    }
    &__title {
      span{
        color:rgb(32, 45, 84);
        font-weight:bolder;
        margin-bottom:2rem;
      }
      h2{
        font-size: 3rem;
        line-height:2.5rem;
        margin-bottom:3rem;
        margin-top:1rem;
        color: black;
      }
    }
    &__description{
      color:black;

      white-space:pre-line;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .experiences {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Experience;