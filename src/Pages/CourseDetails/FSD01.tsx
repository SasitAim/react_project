import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const FSD01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_fsd", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Full-Stack Developer  Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Full-Stack Developer Course Coming Soon!</h3>
      <p className="course-p2">
        We're excited to announce that the Full-Stack Developer course will be available soon. 
        This course will provide you with the skills to handle both front-end and back-end development in modern web applications.
      </p>
      <p className="course-p2">
        While the course is under development, feel free to explore our current offerings on My Learning Platform.
      </p>
      <p className="course-p2">
        We appreciate your enthusiasm and look forward to supporting your career growth.
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

export default FSD01;
