import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const DS01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_ds", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Data Science course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">The Data Science course will be available soon!</h3>
      <p className="course-p2">
        We are currently working on developing and preparing high-quality content for this upcoming course. In the meantime, 
        you're welcome to explore and enjoy other exciting courses available on My Learning Platform.
      </p>
      <p className="course-p2">
        We truly appreciate your passion for learning and thank you for being a part of our community. 
        We look forward to supporting your educational journey and sharing knowledge with all lifelong learners.
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

export default DS01;
