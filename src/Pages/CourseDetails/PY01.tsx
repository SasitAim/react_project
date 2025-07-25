import React from 'react';
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const SYE01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_py", JSON.stringify(1)); // 👈 เปลี่ยนเป็น count_process.... ให้ถูก
    window.location.href = '/courses'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง กด  next แล้วไปไหน
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Python for Beginner Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Python for Beginner Course Coming Soon!</h3>
      <p className="course-p2">
        We're currently developing our Python for Beginner course to help you start your programming journey with one of the most popular and beginner-friendly languages in the world. 
        This upcoming course will cover Python fundamentals, syntax, data structures, and practical exercises to build a strong foundation.
      </p>
      <p className="course-p2">
        While we prepare high-quality content for this course, feel free to explore other exciting courses available on My Learning Platform.
      </p>
      <p className="course-p2">
        Thank you for your interest in learning Python, and we look forward to supporting your growth as you take your first steps into the world of programming.
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
