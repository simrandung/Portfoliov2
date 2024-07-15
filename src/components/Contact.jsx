import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { motion, useAnimation } from 'framer-motion';
import { contactAnimations } from '../animation';

function Contact() {
  const controls = useAnimation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleSendMessage = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <Section id='contact'>
      <Title value="contact" />
      <motion.div className='contact'
        variants={contactAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        whileInView={{ opacity: 1 }}
      >
        <div className='contact__title'>
          <p>
            Stay in touch with me
          </p>
          <h2>Contact with me through this form</h2>
        </div>
        <div className='contact__data'>
          <div className='contact__data__description'>
            <h4>About Me</h4>
            <p>
              I excel in back-end technologies like Java, SQL, Node.js, and MongoDB, and front-end skills in HTML, CSS, JavaScript, and Bootstrap. I build scalable Java applications, manage SQL databases, and create high-performance Node.js solutions. My MongoDB expertise allows flexible databases, and I design dynamic interfaces. My intern experience fuels innovation and quality in software solutions, integrating back-end and front-end development with a user-centric approach.
            </p>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button onClick={handleSendMessage}>Send Message</button>
          </div>
        </div>
      </motion.div>
      {isPopupVisible && (
        <Popup>
          <div className="popup-content">
            <h2>Contact Information</h2>
            <p>Email: dungsimran@gmail.com</p>
            <p>Phone: +91 8208671580</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </Popup>
      )}
    </Section>
  );
}

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .popup-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    button {
      background-color: var(--secondary-color);
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background-color: var(--primary-color);
  padding: 2rem;

  .contact {
    color: var(--secondary-color);
    margin: 0 23rem;
    padding: 2rem;

    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }

    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;

      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
          font-size: 1.2rem;
        }
      }

      .contact__data__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background-color: var(--primary-color);

        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          letter-spacing: 0.2rem;
          width: 100%;
          padding-bottom: 0.7rem;
          color: var(--secondary-color);
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }

        textarea {
          width: 100%;
          height: 50%;
          resize: none;
        }

        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            color: var(--primary-color);
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 10rem;
          }
        }
      }
    }
  }
`;

export default Contact;
