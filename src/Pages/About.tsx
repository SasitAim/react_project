import React from 'react';

const About: React.FC = () => {
  return (
  <div >
    <br />
    <h1>About Us Page</h1>
    <br />
    <h2>About My Learning Platform -  Learn Tech Skills. Launch Your Career.</h2>
    <br />
    <h3 className='home-h3'>My Learning Platform  built with the goal of providing knowledge & skill development for those interested in tech careers.</h3>

    <p className='home-p2'>
      We're more than just an online course provider — we're a community for aspiring tech professionals. My Learning Platform was founded by someone who understands the journey of 
      transitioning into tech without a formal background. Through self-paced online learning, persistence, and real-world practice, we know how transformative the right learning experience can be.
    </p>
    <p className='home-p2'>
      Our platform is built on this belief: with the right tools, support, and mindset, anyone can break into the tech world. That's why we focus on building beginner-friendly, 
      project-based courses that prepare learners for real job roles. Our goal is to equip you with not just knowledge, but the confidence to thrive in the digital age.
    </p>
    <br />

    <figure>
      <img className='home-pic' src="https://anyforsoft.com/static/61c7eeb743cee05f067ed0eee9cdeaa6/87046/How%2520to%2520Create%2520an%2520e-Learning%2520Platform_0.png" alt="Online Learning Pic" />
      <figcaption className='home-figcaption'>online learning picture by https://anyforsoft.com/ Retrieved June 2025</figcaption>
    </figure>
    <br />
    <h3 className='home-h3'>Vision of My Learning Platform </h3>
    <p className='home-p2'>
      We aim for My Learning Platform to be a trusted choice for beginners and individuals looking to upskill in an era of rapid disruption.
      Our mission is to create a learning space that is accessible, high-quality, and aligned with the real demands of the job market.
      We believe that everyone has the potential to change their career path — if given the right opportunity and resources.
    </p>
    <br />
  </div>
  )
};

export default About;
