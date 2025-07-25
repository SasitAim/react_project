import { useNavigate } from 'react-router-dom'; // เพิ่ม

const BED01: React.FC = () => {
  const navigate = useNavigate(); // เพิ่ม

  const handleNext = () => {
    localStorage.setItem("count_process_bed", JSON.stringify(1));
    navigate('/courses'); // ✅ เปลี่ยนจาก window.location.href
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">The Back-End Developer Course is coming soon.</h1>
      <br />

      <figure>
        <img
          className="course-pic"
          src="https://wallup.net/wp-content/uploads/2018/09/30/457780-coming-soon-sign-text-coming-soon.jpg"
          alt="coming soon"
        />
      </figure>
      <br />

      <h3 className="course-h3">Back-End Developer Course will be Coming Soon!</h3>
      <p className="course-p2">
        Our Back-End Developer course is on the way! We're working to bring you a comprehensive program covering server-side programming, databases, and API development.
      </p>
      <p className="course-p2">
        While we're building the content, you're welcome to explore other exciting courses on My Learning Platform.
      </p>
      <p className="course-p2">
        Thank you for your patience and passion for learning.
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

export default BED01;
