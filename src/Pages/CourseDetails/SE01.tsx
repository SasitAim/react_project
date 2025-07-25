import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const SE01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_se", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Software Engineer  Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Software Engineer Course Coming Soon!</h3>
      <p className="course-p2">
        We're working hard to develop an engaging and practical Software Engineer course that covers design principles, development practices, and system thinking.
      </p>
      <p className="course-p2">
        While the content is being finalized, feel free to explore our current course catalog.
        Your curiosity and dedication to learning are truly appreciated!
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

export default SE01;
