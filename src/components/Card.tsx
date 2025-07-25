import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import '../styles/style_card.css';

type CardProps = {
  img_course: string;
  coursename: string;
  des: string;
  idcard: number;
};

const Card: React.FC<CardProps> = ({ img_course, coursename, des,idcard }) => {
  // const [count, setCount] = useState(0);
  const [localget, setLocalget] = useState(0)
  const navigate = useNavigate(); 
  const handleClick = () => {
  }; 


  // Process bar
  function getstorage(){
    if(idcard==0){
      const saved = parseInt(localStorage.getItem("count_process-sql") || '0', 10);
      const next = saved * 50;
      setLocalget(next);
    }
    else if(idcard==1){
      const saved = parseInt(localStorage.getItem("count_process_de") || '0', 10);
      const next = saved * 50;
      setLocalget(next);
    }
    else if(idcard==2){
      const saved = parseInt(localStorage.getItem("count_process_da") || '0', 10);
      const next = saved * 50;
      setLocalget(next);
    }
    else if(idcard==3){
      const saved = parseInt(localStorage.getItem("count_process_ds") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==4){
      const saved = parseInt(localStorage.getItem("count_process_fed") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==5){
      const saved = parseInt(localStorage.getItem("count_process_bed") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==6){
      const saved = parseInt(localStorage.getItem("count_process_fsd") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==7){
      const saved = parseInt(localStorage.getItem("count_process_sd") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==8){
      const saved = parseInt(localStorage.getItem("count_process_se") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==9){
      const saved = parseInt(localStorage.getItem("count_process_sye") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==10){
      const saved = parseInt(localStorage.getItem("count_process_ce") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
    else if(idcard==11){
      const saved = parseInt(localStorage.getItem("count_process_py") || '0', 10);
      const next = saved * 100;
      setLocalget(next);
    }
  }



  // Courses Page go to Deatail course
  // add Route ที่หน้า App ด้วย
  const handleEnterCourse = () => {

  // เพิ่มมาลอง Logout
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    alert("Please log in before accessing the course.");
    return;
  }

  const courseSlug = coursename.toLowerCase().replace(/\s+/g, '-');
  if (courseSlug =='sql-fundamentals'){
    navigate(`/course/sql-01`);
  } 
  else if(courseSlug =='data-engineer'){
    navigate(`/course/de-01`);
  }
  else if(courseSlug =='data-analysis'){
    navigate(`/course/da-01`);
  }
  else if(courseSlug =='data-science'){
    navigate(`/course/ds-01`);
  }
  else if(courseSlug =='back-end-dev'){
    navigate(`/course/bed-01`);
  }
  else if(courseSlug =='front-end-dev'){
    navigate(`/course/fed-01`);
  }
  else if(courseSlug =='full-stack-dev'){
    navigate(`/course/fsd-01`);
  }
  else if(courseSlug =='software-dev'){
    navigate(`/course/sd-01`);
  }   
  else if(courseSlug =='software-eng'){
    navigate(`/course/se-01`);
  }
  else if(courseSlug =='system-eng'){
    navigate(`/course/sye-01`);
  }
  else if(courseSlug =='cloud-eng'){
    navigate(`/course/ce-01`);
  }
  else if(courseSlug =='python-beginner'){
    navigate(`/course/py-01`);
  }             
  // ****************************************
  else{
    navigate(`/course/${courseSlug}`);
  }
};

  useEffect(() => {
    console.log("คอมโพเนนต์โหลดแล้ว");
    getstorage()
    // console.log(idcard)
  }, []);

  const barColor1 = localget < 50 ? '#ff9800' : localget < 80 ? '#2196f3' : '#4caf50';


  return (
    <div className="card">
      <img className="card-image" src={img_course} alt="Course Pic" />
      <h2>{coursename}</h2>
      <p>{des}</p>

{/* แก้ไข button process bar */}
    <button className='btn-process' onClick={handleClick}>
      Process {localget}%
    </button>
    {/* <button className='btn-process' onClick={handleClick}>
      Process {localget}%
    </button> */}


    <button
        onClick={handleEnterCourse}
        style={{
          marginTop: '10px',
          padding: '6px 12px',
          // backgroundColor: '#007bff',
          // backgroundColor: '#007bff',
          backgroundColor: 'rgb(113, 157, 206)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Enter Course
      </button>

      <div className="progress m-t-30 shadow bg-white rounded" style={{ height: '7px', marginTop: '10px' }}>
        <div
          className="progress-bar progress-bar-filled"
          role="progressbar"
          aria-valuenow={localget}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: `${localget}%`,
            background: barColor1,
            transition: 'width 0.4s ease'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
