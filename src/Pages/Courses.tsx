// import React from 'react';
import React, { useState } from 'react';
import Card from '../components/Card';
import profilePicSQL from '../assets/00SQL.png'
import profilePicDA from '../assets/01DE.png';
import profilePicDE from '../assets/02DA.png';
import profilePicDS from '../assets/03DS.png';
import profilePicFE from '../assets/04Font End.png';
import profilePicBE from '../assets/05Back End.png';
import profilePicFS from '../assets/06Full Stack.png';
import profilePicSD from '../assets/07Soft Dev.png';
import profilePicSE from '../assets/08Soft Eng.png';
import profilePicSYE from '../assets/09Syst Eng.png';
import profilePicCE from '../assets/10Cloud Eng.png';
import profilePicPY from '../assets/11Python.png';
// Courses
const Courses: React.FC = () => {
  const [filter, setFilter] = useState('All');

// const Courses: React.FC = () => {
  const title = [
    { image: profilePicSQL, coursename: 'SQL Fundamentals', des: 'Intro to SQL functions and simple queries for beginners.',category:'Programming Language' },
    { image: profilePicDA, coursename: 'Data Engineer', des: 'Learn the basics skills and becoming a Data Engineer.',category: 'Data' },
    { image: profilePicDE, coursename: 'Data Analysis', des: 'Foundational course for aspiring Data Analysts to explore and visualize data.',category: 'Data' },
    { image: profilePicDS, coursename: 'Data Science', des: 'Introductory course to data modeling, statistics, and machine learning.',category: 'Data' },
    { image: profilePicFE, coursename: 'Front End Dev', des: 'Start your journey in web development with hands-on HTML, CSS, Java Script and other skills.', category: 'Developer' },
    { image: profilePicBE, coursename: 'Back End Dev', des: 'Learn the basics of server-side development, APIs, and databases.', category: 'Developer' },
    { image: profilePicFS, coursename: 'Full Stack Dev', des: 'Foundational course to build complete web applications from front to back.', category: 'Developer' },
    { image: profilePicSD, coursename: 'Software Dev', des: 'Introductory course for creating software using industry-standard tools and languages.', category: 'Developer' },
    { image: profilePicSE, coursename: 'Software Eng', des: 'Beginner course focusing on software architecture, design patterns, and engineering principles.', category: 'Developer' },
    { image: profilePicSYE, coursename: 'System Eng', des: 'Start your journey in IT systems with essential infrastructure and operations knowledge.', category: 'Developer' },
    { image: profilePicCE, coursename: 'Cloud Eng', des: 'Foundational course for deploying and managing applications in cloud environments.', category: 'Developer' },
    { image: profilePicPY, coursename: 'Python Beginner', des: 'Learn Python fundamentals to start coding.', category: 'Programming Language' },
  ];

  const filteredCourses = title.filter(course =>
  filter === 'All' ? true : course.category === filter
  );

  return (
    <main>
      <br />
      <h1>Our Courses</h1>
      <br />
      <h2>Our Courses of my learning platform -  Learn Tech Skills. Launch Your Career.</h2>
      <br />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {['All', 'Data', 'Developer', 'Programming Language'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              margin: '0 8px',
              padding: '8px 16px',
              backgroundColor: filter === category ? '#007bff' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="card-container">
        {filteredCourses.map((item, index) => (
          <Card 
            key={index} 
            img_course={item.image} 
            coursename={item.coursename} 
            des={item.des} 
            idcard={index}
          />
        ))}
      </div>
      <br />
    </main>
  );
};

export default Courses;
