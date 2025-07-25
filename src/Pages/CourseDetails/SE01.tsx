import { useNavigate } from 'react-router-dom'; // เพิ่ม

const SE01: React.FC = () => {
  const navigate = useNavigate(); // เพิ่ม

  const handleNext = () => {
    localStorage.setItem("count_process_se", JSON.stringify(1));
    navigate('/courses'); // ✅ เปลี่ยนจาก window.location.href
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
