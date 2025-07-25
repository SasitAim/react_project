import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const CE01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_ce", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/react_project/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง กด  next แล้วไปไหน
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Cloud Engineer Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Cloud Engineer Course Coming Soon!</h3>
      <p className="course-p2">
        Get ready for our upcoming Cloud Engineer course! We're currently building content that covers cloud architecture, 
        deployment, and management using leading platforms like AWS, Azure, and Google Cloud.
      </p>
      <p className="course-p2">
        Until it launches, we invite you to explore other learning opportunities on My Learning Platform.
      </p>
      <p className="course-p2">
        We appreciate your enthusiasm and commitment to advancing your skills.
      </p>
      <br />

      {/* <h2 className="course-h2">Continue to  Data Analyst Foundation Part 2</h2> */}

      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <button className="btmNext" onClick={handleNext}>
          Finish Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default CE01;
