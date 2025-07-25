import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ เพิ่ม
import "../../styles/style_course_detail.css";

const DA01: React.FC = () => {
  const navigate = useNavigate(); // ✅ ใช้ useNavigate

  const handleNext = () => {
    localStorage.setItem("count_process_da", JSON.stringify(1));
    navigate('/course/da-02'); // ✅ ใช้ navigate แทน
  };

// import React from 'react';
// import "../../styles/style_course_detail.css";


// const DA01: React.FC = () => {
//   const handleNext = () => {
//     localStorage.setItem("count_process_da", JSON.stringify(1)); 
//     window.location.href = '/course/da-02'; 
//   };

  return (
    <div>
      <br />
      <h1 className="course-h1">Data Analyst 1</h1>
      <h2 className="course-h2">Data Analyst Foundation Part 1</h2>

      <figure>
        <img
          className="course-pic"
          src="https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f1a5c164b271a7cd531_data-analysis-1024x576.webp"
          alt="Data Analysis Pic"
        />
        <figcaption className="course-figcaption">
          Data Analysis picture by https://www.sprinkledata.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <h3 className="course-h3">Who is a Data Analyst?</h3>
      <p className="course-p2">
        A Data Analyst (DA) is a professional who analyzes large volumes of customer or business data—commonly referred to as 
        Big Data—to extract valuable insights. These insights are used to support strategic planning, decision-making, and business performance tracking. 
        One of the primary roles of a Data Analyst is to discover business insights and present them through reports or dashboards that aid in making 
        informed business decisions and achieving organizational goals.
      </p>
      <p className="course-p2">
        The role of a Data Analyst requires a strong business sense, as they must work with diverse datasets, constantly shifting objectives, and various business questions.
      </p>


      {/* Detail 1 *************** */}
      <br />
      <h3 className="course-h3">Key Responsibilities of a Data Analyst</h3>
      {/* Data Entry */}
      <h4 className="course-h4">Data Entry</h4>
      <p className="course-p2">
        Before analysis can begin, raw data must be cleaned and organized into a usable format. Often, 
        the data received is unstructured or inconsistent due to its volume and variety. Therefore, 
        Data Analysts perform tasks like data wrangling, transformation, and cleaning to ensure it is analysis-ready.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://www.mas-software.com/wp-content/uploads/2021/12/Data-Entry.jpg.webp"
          alt="Data Entry"
        />
        <figcaption className="course-figcaption">
          Data Entry by https://www.mas-software.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Analytics / Data Mining */}
      <h4 className="course-h4">Analytics / Data Mining</h4>
      <p className="course-p2">
        This involves analyzing large datasets to identify hidden patterns, correlations, or classifications. Analysts apply statistical or machine learning techniques to segment data, 
        identify trends, and uncover relationships that can be turned into actionable insights.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://www.sectorlink.com/img/blog/Website-Analytics.png"
          alt="Analytics / Data Mining"
        />
        <figcaption className="course-figcaption">
          Analytics / Data Mining by https://www.sectorlink.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Reporting / Data Visualization */}
      <h4 className="course-h4">Reporting / Data Visualization</h4>
      <p className="course-p2">
        Data Analysts are responsible for presenting their findings in a clear and digestible way. They use charts, graphs, and dashboards (Data Visualization) to simplify complex data for decision-makers. 
        The goal is to make the information easy to understand at a glance, eliminating the need for reading through detailed reports.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://www.justinmind.com/wp-content/webp-express/webp-images/uploads/2024/06/dynamic-data-widgets-dahsboard.png.webp"
          alt="Reporting / Data Visualization"
        />
        <figcaption className="course-figcaption">
          Reporting / Data Visualization by https://www.justinmind.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Support for Other Departments */}
      <h4 className="course-h4">Support for Other Departments</h4>
      <p className="course-p2">
        Analysts collaborate with various departments by analyzing data according to specific requirements or criteria. Their insights help guide business units in making better decisions aligned with their goals.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/888182a931c2296e/original/blog-featured-data-sharing-svg.svg"
          alt="Support for Other Departments"
        />
        <figcaption className="course-figcaption">
          Support for Other Departments by https://nordvpn.com/blog/data-sharing/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Management */}
      <h4 className="course-h4">Data Management</h4>
      <p className="course-p2">
        Data Analysts ensure that data is well-organized and properly stored, making it easy to retrieve and use when needed. This process includes maintaining data consistency, quality, and accessibility.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://tdwi.org/articles/2023/04/27/-/media/tdwi/tdwi/bitw/datamgt3.jpg"
          alt="Data Management"
        />
        <figcaption className="course-figcaption">
          Data Management by https://tdwi.org/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />


      <br />
      {/* <p className="course-p2">
        Continue to  Introduction to Data Engineer Part 2
      </p> */}
      <h2 className="course-h2">Continue to  Data Analyst Foundation Part 2</h2>

      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <button className="btmNext" onClick={handleNext}>
          Next Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default DA01;
