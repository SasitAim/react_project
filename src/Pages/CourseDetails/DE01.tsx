import React from 'react';
import "../../styles/style_course_detail.css";

const DE01: React.FC = () => {
  const handleNext = () => {
    localStorage.setItem("count_process_de", JSON.stringify(1));
    window.location.href = '/course/de-02'; // 👈 เปลี่ยนเป็น route ที่ถูกต้อง
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">Data Engineer</h1>
      <h2 className="course-h2">Introduction to Data Engineer Part 1</h2>

      <figure>
        <img
          className="course-pic"
          src="https://k21academy.com/wp-content/uploads/2022/04/Napa-Data-Engineering-Image-1536x551.jpg"
          alt="Data Engineer Pic"
        />
        <figcaption className="course-figcaption">
          Data Engineer picture by https://k21academy.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <h3 className="course-h3">What is a Data Engineer?</h3>
      <p className="course-p2">
        A Data Engineer is a professional who designs, builds, and maintains systems for managing large volumes of data—commonly known as Big Data. 
        Their primary responsibility is to collect, store, transform, and prepare data in a structured format that can be effectively used by Data Scientists, 
        Data Analysts, and other stakeholders within an organization.
      </p>

      {/* Detail 1 *************** */}
      <br />
      <h3 className="course-h3">Key Responsibilities of a Data Engineer</h3>
      {/* System Design and Development */}
      <h4 className="course-h4">System Design and Development</h4>
      <p className="course-p2">
        Build and maintain scalable infrastructure for data storage and processing, 
        ensuring it can handle current and future data workloads.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://media.licdn.com/dms/image/v2/C4E12AQFtoHS_3Yd2mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1621854047757?e=2147483647&v=beta&t=jinjDQxo_sKtDTRTD8bzzkHTWGOkN_txPmNhhxmNPcI"
          alt="System Design"
        />
        <figcaption className="course-figcaption">
          System Design by https://www.linkedin.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Collection */}
      <h4 className="course-h4">Data Collection</h4>
      <p className="course-p2">
        Extract data from various internal and external sources, including databases, 
        APIs, and real-time streaming systems.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230714124356/Data-Collection.png"
          alt="Data Collection"
        />
        <figcaption className="course-figcaption">
          Data Collection by https://www.geeksforgeeks.org/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Preparation */}
      <h4 className="course-h4">Data Preparation</h4>
      <p className="course-p2">
        Transform raw data into a clean and usable format,
        ready for analysis or integration into business applications.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://cdn.educba.com/academy/wp-content/uploads/2024/02/Data-Preparation.jpg"
          alt="Data Preparation"
        />
        <figcaption className="course-figcaption">
          Data Preparation by https://www.educba.com/data-preparation/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Management */}
      <h4 className="course-h4">Data Management</h4>
      <p className="course-p2">
        Organize, clean, and validate data to ensure accuracy, consistency, and reliability.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://tdwi.org/articles/2024/02/07/-/media/tdwi/tdwi/bitw/datamgt2.jpg"
          alt="Data Management"
        />
        <figcaption className="course-figcaption">
          Data Management by https://tdwi.org/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Building Data Pipelines */}
      <h4 className="course-h4">Building Data Pipelines</h4>
      <p className="course-p2">
        Develop automated data pipelines that enable continuous and efficient data flow 
        from source to destination systems.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://res.cloudinary.com/hevo/image/upload/v1677835790/hevo-docs/AzureSynapseAnalytics329/DataFlowInAPipeline.png"
          alt="Data Pipeline"
        />
        <figcaption className="course-figcaption">
          Data Pipeline by https://docs.hevodata.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Database and Data Warehouse Administration */}
      <h4 className="course-h4">Database and Data Warehouse Administration</h4>
      <p className="course-p2">
        Oversee and maintain databases and data warehouses to ensure high performance, 
        availability, and security.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://tppr.com/wp-content/uploads/2017/02/Banners_DBA-Services-1-1400x421.png"
          alt="Database Administration"
        />
        <figcaption className="course-figcaption">
          Database Administration by https://tppr.com/database-administration/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Collaboration with Other Teams */}
      <h4 className="course-h4">Collaboration with Other Teams</h4>
      <p className="course-p2">
        Work closely with Data Scientists, Data Analysts, software engineers, 
        and business teams to ensure that data systems meet organizational needs.
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://substackcdn.com/image/fetch/$s_!r1f3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F014f4331-b834-4849-a351-cfb58aed6aec_760x309.png"
          alt="collaboration "
        />
        <figcaption className="course-figcaption">
          Work collaboration by https://pipeline2insights.substack.com/ Retrieved July 2025
        </figcaption>
      </figure>

      <br />
      {/* <p className="course-p2">
        Continue to  Introduction to Data Engineer Part 2
      </p> */}
      <h2 className="course-h2">Continue to  Introduction to Data Engineer Part 2</h2>

      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <button className="btmNext" onClick={handleNext}>
          Next Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default DE01;
