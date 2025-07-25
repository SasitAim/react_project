import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ เพิ่ม
import "../../styles/style_course_detail.css";

const DE02: React.FC = () => {
  const navigate = useNavigate(); // ✅ ใช้ useNavigate

  const completeLesson = () => {
    localStorage.setItem("count_process_de", JSON.stringify(2));
    navigate('/courses'); // ✅ ใช้ navigate แทน
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">Data Engineer</h1>
      <h2 className="course-h2">Introduction to Data Engineer Part 2</h2>

      <figure>
        <img
          className="course-pic"
          src="https://k21academy.com/wp-content/uploads/2022/04/Napa-Data-Engineering-Image-1536x551.jpg"
          alt="Data Engineer"
        />
        <figcaption className="course-figcaption">
          Data Engineer picture by https://molodost.bz/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />


      {/* The Importance of Data Engineers */}
      <h3 className="course-h3">The Importance of Data Engineers</h3>
      <p className="course-p2">
        In today's data-driven world, Data Engineers play a crucial role. They lay the groundwork that allows organizations to turn data into actionable insights. 
        Without skilled data engineers, companies may struggle with data accessibility, quality, and usability—leading to poor business decisions and missed opportunities.
      </p>
      <br />
      
      {/* Data Science vs. Data Engineer */}
      <h3 className="course-h3">Data Science vs. Data Engineer: What's the Difference?</h3>

      <figure>
        <img
          className="course-pic"
          src="https://assets.datamation.com/uploads/2024/04/Datamation_DataScienceVsDataEngineeringAnIn-DepthComparison_2024_DA_rnd1-1536x947.png"
          alt="Data Science vs. Data Engineer"
        />
        <figcaption className="course-figcaption">
          Data Science vs. Data Engineer by https://www.datamation.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      <p className="course-p2">
        In today's data-driven world, Data Engineers play a crucial role. They lay the groundwork that allows organizations to turn data into actionable insights. 
        Without skilled data engineers, companies may struggle with data accessibility, quality, and usability—leading to poor business decisions and missed opportunities.
      </p>

      <h4 className="course-h4">Understanding the Difference: Data Science vs Data Engineering</h4>
      <p className="course-p2">
        The image illustrates the distinction between two closely related but fundamentally different roles in the data field: Data Science and Data Engineering.
      </p>
      <br />

      <h4 className="course-h4">Data Science</h4>
      <p className="course-p2">Focuses on extracting useful insights from large and complex datasets.</p>
      <p className="course-p2">Data scientists use statistical techniques, machine learning, and analytical tools to identify trends and patterns that support strategic decision-making.</p>
      <p className="course-p2">Their goal is to turn raw data into meaningful information that drives business outcomes.</p>
      <br />
      
      <h4 className="course-h4">Data Engineering</h4>
      <p className="course-p2">Involves the design, construction, and maintenance of the systems and infrastructure that handle data.</p>
      <p className="course-p2">Data engineers build and manage databases, data pipelines, and other data architectures that enable smooth and reliable access to data.</p>
      <p className="course-p2">They ensure that data is collected, stored, and made available in a clean and usable format for downstream users like data scientists and analysts.</p>
      <br />

      <h3 className="course-h3">Summary</h3>
      <p className="course-p2">
        In today's data-centric world, the role of a Data Engineer is foundational to any organization's ability to effectively use data for strategic advantage. 
        Data Engineers are responsible for designing, building, and maintaining the systems that manage and process large-scale datasets, often referred to as Big Data.
      </p>
      <figure>
        <img
          className="course-pic"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*wlbQD95h3G5CbVBJ.jpg"
          alt="Data Image"
        />
        <figcaption className="course-figcaption">
          Data Image by https://medium.com/data-quality-beyond/  Retrieved July 2025
        </figcaption>
      </figure>

      <h4 className="course-h4">Their responsibilities span across:</h4>
        <p className="course-p2">System architecture, ensuring the infrastructure is scalable and efficient.</p>
        <p className="course-p2">Data extraction from various sources.</p>
        <p className="course-p2">Data transformation and preparation, turning raw inputs into clean, structured formats.</p>
        <p className="course-p2">Pipeline development, enabling seamless and automated data flow.</p>
        <p className="course-p2">Database and data warehouse management, ensuring data availability and security.</p>
        <p className="course-p2">Collaboration with cross-functional teams such as data scientists and analysts to align data infrastructure with business needs.</p>    
      <br />
      <h4 className="course-h4">The distinction between Data Engineering and Data Science is also critical to understand:</h4>
        <p className="course-p2">Data Engineers build and maintain the infrastructure that makes data usable.</p>
        <p className="course-p2">Data Scientists analyze that data to extract valuable insights and support decision-making.</p>
      <br />


      <div style={{ display: "flex", marginTop: "1rem" }}>
        <button className="btmNext" onClick={completeLesson}>
          Finish Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default DE02;
