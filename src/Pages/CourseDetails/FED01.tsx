import { useNavigate } from 'react-router-dom'; // เพิ่ม

const FEC01: React.FC = () => {
  const navigate = useNavigate(); // เพิ่ม

  const handleNext = () => {
    localStorage.setItem("count_process_fed", JSON.stringify(1));
    navigate('/courses'); // ✅ เปลี่ยนจาก window.location.href
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
