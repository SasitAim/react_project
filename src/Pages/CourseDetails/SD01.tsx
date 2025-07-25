import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const SD01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_sd", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Software Developer  Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Software Developer Course Coming Soon!</h3>
      <p className="course-p2">
        The Software Developer course is currently in preparation! This course will guide you through the fundamentals of software development, from planning and coding to testing and deployment.
      </p>
      <p className="course-p2">
        Until it's ready, we invite you to check out other courses on My Learning Platform.
        Thank you for being a part of our learning community.
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

export default SD01;
