import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const FEC01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_fed", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Front-End Developer  Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Front-End Developer Course Coming Soon!</h3>
      <p className="course-p2">
        We are currently in the process of designing and preparing valuable content for our Front-End Developer course. 
        This course will focus on modern web technologies, responsive design, and creating user-friendly interfaces.
      </p>
      <p className="course-p2">
        In the meantime, feel free to explore other courses available on My Learning Platform.
        Thank you for your interest, and we look forward to supporting your learning journey soon!
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

export default FEC01;
