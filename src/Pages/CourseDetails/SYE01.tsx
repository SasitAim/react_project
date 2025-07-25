import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const SYE01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_sye", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง กด  next แล้วไปไหน
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The System Engineer Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">System Engineer Course Coming Soon!</h3>
      <p className="course-p2">
        The System Engineer course is on its way! We're preparing a hands-on learning experience focusing on system integration, maintenance, and infrastructure management.
      </p>
      <p className="course-p2">
        In the meantime, you're welcome to explore other technical courses on My Learning Platform.
      </p>
      <p className="course-p2">
        Thank you for your continued interest and support.
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

export default SYE01;
