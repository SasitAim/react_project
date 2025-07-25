import React from 'react';
import '../styles/style_home.css'

const Home: React.FC = () => {
  return (
    <div>
      <br />
      <h1>Home Page</h1>
      <br />
      <h2>Welcome to my learning platform -  Learn Tech Skills. Launch Your Career.</h2>
      <br />
      <h3 className='home-h3'>My Learning Platform  built with the goal of providing knowledge & skill development for those interested in tech careers.</h3>
      <br />
      <figure>
        <img className='home-pic' src="https://www.gumlet.com/learn/content/images/2022/07/Elearning_platform.jpg" alt="Online Learning Pic" />
        <figcaption className='home-figcaption'>online learning picture by https://www.gumlet.com/ Retrieved June 2025</figcaption>
      </figure>
      
      <p className='home-p2'>
        My Learning Platform was created with the founder personal journey in mind — starting with online learning and 
        the desire to transition into the Data and Tech field through self-study via various online courses.
        That is why we truly understand what beginners need: solid fundamentals, practical skills, clear guidance, 
        and hands-on projects that help learners grow and gain the confidence to build a new career in this rapidly evolving industry.
        Whether you're just starting out or looking for a new opportunity — start developing your tech skills with us today.
      </p>

      <figure>
        <img className='home-pic' src="https://sv1.img.in.th/7FlHUO.png" alt="Courses"/>
      </figure>
      <p className='home-p2'>At my learning platform, we offer beginner-friendly and industry-relevant courses that help you gain the skills you need to become a:</p>
      <ul className='home-ul'>
        <li>Data Analyst who can turn raw data into powerful insights</li>
        <li>Data Engineer who builds scalable data pipelines and systems</li>
        <li>Data Scientist who leverages machine learning and statistics</li>
        <li>Front-End Developer who creates stunning and responsive interfaces</li>
        <li>Back-End Developer who powers applications behind the scenes</li>
        <li>Full-Stack Developer who builds complete digital solutions</li>
        <li>Software Developer / Engineer who designs and develops software from scratch</li>
        <li>System Engineer who maintains and optimizes IT infrastructure</li>
        <li>Cloud Engineer who architects systems in the cloud</li>
      </ul>
      <p className='home-p2'>Whether you're just starting out or switching careers, 
        our platform is designed to make tech education accessible, 
        practical, and inspiring. With hands-on projects, expert guidance, 
        and a supportive learning community — you'll be career-ready 
        in no time.</p>
        <br />
    </div>
  )
};

export default Home;
