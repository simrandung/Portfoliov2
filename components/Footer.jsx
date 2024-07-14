import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodingninjas, SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="icons">
          <a href="https://www.naukri.com/code360/profile/Simran30" target="_blank" rel="noopener noreferrer">
            <SiCodingninjas size={30} />
          </a>
          <a href="https://leetcode.com/u/dungsimran/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={30} />
          </a>
          <a href="https://github.com/simrandung" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/simran-dung/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        <p>&copy; 2024 Simran Dung. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 0;
  text-align: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .icons {
    display: flex;
    gap: 1rem;

    a {
      color: white;
      transition: color 0.3s;

      &:hover {
        color: #61dafb;
      }
    }
  }

  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

export default Footer;
