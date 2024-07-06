import React from 'react';
import home from '../assets/home.jpg';
import styled from 'styled-components';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { homeAnimation, homeInfoAnimation } from "../animation";

function Home() {
  return <Section id="home">
    <Navbar />
    <motion.div className='home'
    initial="hidden"
        animate="show"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
    >

      <div className='content'>
        <div className='title'>
          <h2>Hello, My name is</h2>
          <h1>Simran Dung</h1>
        </div>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Software Developer</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI Designer</div>
            <div className="i-title-item">React Developer</div>
            <div className="i-title-item">Java Developer</div>
          </div>
        </div>

        <div className='subTitle'>
          <p> I excel in back-end technologies like Java, SQL, Node.js, and MongoDB, and front-end skills in HTML, CSS, JavaScript, and Bootstrap. I build scalable Java applications, manage SQL databases, and create high-performance Node.js solutions. My MongoDB expertise allows flexible databases, and I design dynamic interfaces. My intern experience fuels innovation and quality in software solutions, integrating back-end and front-end development with a user-centric approach.</p>
        </div>
      </div>
</motion.div>
      <motion.div
        className="info"
        initial="hidden"
        animate="show"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className='grid'>
          <div className='col'>
            <strong>Email</strong>
            <p>dungsimran@gmail.com</p>
          </div>
          <div className='col'>
            <strong>Mobile</strong>
            <p>+91 8208671580</p>
          </div>
          <div className='col'>
            <strong>Address</strong>
            <p>Ulhasnagar,421003</p>
          </div>
          <div className='col'>
            <strong>10th Percentage</strong>
            <p>75.80%</p>
          </div>
          <div className='col'>
            <strong>12th Percentage</strong>
            <p>84.50%</p>
          </div>
          <div className='col'>
            <strong>B.E/B.tech CGPI</strong>
            <p>7.91</p>
          </div>
        </div>
      </motion.div>
    
  </Section>
}

const Section = styled.section`
background-image:url(${home});
    background-size:cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
    .home{
      height:100% ; 
      .content{
        height:100%;
        color:rgb(32, 45, 84);
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        gap:1.2rem;
        margin-top:8rem;
        padding-left:18rem;
        width:60%;
      }
      .title{
        h1{
          font-size:4rem;
          line-height:5rem;
        }
      }
      .subTitle{
        p{
          width:80%;
          font-size:1.1rem;
        }
      }
      .i-title{
    height: 40px;
    overflow: hidden;
    margin-top: -1%;
    /* border:5px solid blueviolet; */
}

.i-title-wrapper{
    /* height: 100%; */
    display:flex;
    flex-direction:column;
    animation: move 10s ease-in-out infinite alternate;
    /* margin-top: 25%; */
    /* border:10px solid red; */
}

@keyframes move {
      0%, 20% {
        transform: translateY(0);
      }
      25%, 45% {
        transform: translateY(-50px);
      }
      50%, 70% {
        transform: translateY(-100px);
      }
      75%, 95% {
        transform: translateY(-150px);
      }
      100% {
        transform: translateY(-200px);
      }
    }.i-title-item{
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(43, 70, 152);
    display: flex;
    align-items: center;
}
}
.info{
  position:absolute;
  bottom: -6rem;
  right:0;
  background-color: var(--secondary-color);
  color:white;
  padding:4.5rem;
  .grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:3rem;
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }

    
`;

export default Home;
