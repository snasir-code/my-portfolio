// components/Header.js
import React from 'react';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h1>Shahzaib Nasir</h1>
          <div>
            Passionate software engineer with 5+ years of experience in web development at a large professional financial services firm. 
            Proficient in agile methodologies, full-stack web development, and SDLC.
            Cross functional collaboration.
            Mentored junior colleagues. 
            Academic background in Digital and Technology Solutions BSc.
          </div>
          <div><strong>Key skills:</strong></div>
          <div><strong>Programming: </strong>JavaScript, TypeScript, HTML, CSS, Python, Java,</div>
          <div><strong>Technologies: </strong></div>
          <div>
            NextJS, React, Net core, NodeJS, Cypress, Django, Tailwind CSS, Bootstrap, 
            Headless U,l REST APls, Docker, Git CI/CD, Figma design/UX, Jira, PostgreSQL 
          </div>
        <div className="link-wrapper">
          <Link href="https://github.com/snasir-code" target="_blank" rel="noopener">
            <GitHubIcon sx={{ color: '#757575'}} />snasir
          </Link>
          <Link href="https://www.linkedin.com/in/shahzaib-nasir-340059147/" target="_blank" rel="noopener">
            <LinkedInIcon sx={{ color: '#757575' }} />snasir
          </Link>
        </div>
      </div>
    </header>
);


}

export default Header;
