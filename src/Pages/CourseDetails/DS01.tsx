import { useNavigate } from 'react-router-dom'; // เพิ่ม

const DS01: React.FC = () => {
  const navigate = useNavigate(); // เพิ่ม

  const handleNext = () => {
    localStorage.setItem("count_process_ds", JSON.stringify(1));
    navigate('/courses'); // ✅ เปลี่ยนจาก window.location.href
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
