import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/profile.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to close the sidebar
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className='brand__container'>
        <a href='#home' className='brand'>
          <img src={logo} alt='logo' />
        </a>
        <div className='toggle'>
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? 'show' : ''}`}>
        <ul>
          <li className='active'>
            <a href='/' onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href='#experiences' onClick={closeNav}>
              Experience
            </a>
          </li>
          <li>
            <a href='#skills' onClick={closeNav}>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' onClick={closeNav}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  .brand__container {
    display: flex;
    align-items: center;
    .brand {
      display: flex;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid rgb(32, 45, 84);
        }
      }
      li {
        a {
          color: rgb(32, 45, 84);
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    padding: 0 1rem;
    .brand__container {
      justify-content: space-between;
      width: 100%;
      .brand {
        img {
          margin-left: 0;
        }
      }
      .toggle {
        display: block;
        padding-right: 1rem;
      }
    }
    .links {
      position: fixed;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? '60%' : '0%')};
      height: 100vh;
      background-color: rgb(32, 45, 84);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          margin: 1rem 0;
          a {
            color: white;
            font-size: 1.5rem;
          }
        }
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
`;

export default Navbar;
