import React from "react";
import "../../styles/style_course_detail.css";

// const ต้องเปลี่ยนเป็นของคอร์สนั้นๆด้วย อย่าลืม !!
const DA02: React.FC = () => {
  const completeLesson = () => {
    localStorage.setItem("count_process_da", JSON.stringify(2));
    window.location.href = "/courses";
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">Data Analyst 2</h1>
      <h2 className="course-h2">Data Analyst Foundation Part 2</h2>

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
      <br />


      {/* Essential Skills for a Data Analyst */}
      <h3 className="course-h3">Essential Skills for a Data Analyst</h3>
      <h4 className="course-h4">Math / Statistics</h4>

      <p className="course-p2">
        A solid foundation in mathematics and statistics is essential for a Data Analyst. Although deep theoretical expertise isn't always required, the ability to measure growth rates, 
        calculate performance metrics, and understand basic data distributions is crucial. These competencies enable analysts to extract meaningful insights from data, which in turn 
        support effective planning and informed business strategy development.
      </p>
      <figure>
        <img
          className="course-pic"
          src="https://consoleflare.com/blog/wp-content/uploads/2023/07/fundamentals-of-statistics.png"
          alt="Math / Statistics"
        />
        <figcaption className="course-figcaption">
          Math / Statistics by https://consoleflare.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Visualization */}
      <h4 className="course-h4">Data Visualization</h4>
      <p className="course-p2">
        The ability to represent complex data visually is crucial. Beyond creating PowerPoint slides, Data Analysts are expected to build automated dashboards that update in 
        real-time—critical in today's fast-moving digital business environment.
      </p>
      <figure>
        <img
          className="course-pic"
          src="https://www.finereport.com/en/wp-content/themes/blogs/images/2019071010A.png"
          alt="Data Visualization"
        />
        <figcaption className="course-figcaption">
          Data Visualization by https://www.finereport.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Business Domain Expertise */}
      <h4 className="course-h4">Business Domain Expertise</h4>
      <p className="course-p2">
        Understanding the nature of the client's business is vital. A Data Analyst must grasp specific business requirements and industry dynamics to generate relevant insights. 
        This domain knowledge helps determine what data to extract, how to analyze it, and how to align results with business needs.
      </p>
      <figure>
        <img
          className="course-pic"
          src="https://www.bluehost.com/blog/wp-content/uploads/2024/05/image-8.png"
          alt="Business Domain Expertise"
        />
        <figcaption className="course-figcaption">
          Business Domain Expertise by https://www.bluehost.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Database Knowledge */}
      <h4 className="course-h4">Database Knowledge</h4>
      <p className="course-p2">
        Data Analysts must be familiar with databases and large-scale data storage. They should understand basic data infrastructure and how to handle large and growing datasets effectively.
        Familiarity with data structures enables correct analysis and helps address data gaps through better collection strategies.
      </p>
      <figure>
        <img
          className="course-pic"
          src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4084683%2Fcover_image%2Fregular_1708x683%2F0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Newsletter-549c07a55cc276f4204263b6e6bef737.png"
          alt="Database Knowledge"
        />
        <figcaption className="course-figcaption">
          Database Knowledge by https://www.toptal.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Data Tools */}
      <h4 className="course-h4">Data Tools</h4>

      {/* Spreadsheet Software */}
      <h5 className="course-h5">Spreadsheet Software</h5>
      <p className="course-p2">
        Microsoft Excel is a widely used tool for performing basic data manipulation, analysis, and visualization. It is favored for its intuitive interface and flexibility in handling various data types. 
        Similarly, Google Sheets offers cloud-based functionality with real-time collaboration, making it ideal for teams working together on data tasks. Both tools are essential for analysts who need to 
        work with structured data in an accessible and efficient way.
      </p>
      
      <figure>
        <img
          className="course-pic"
          src="https://images.ctfassets.net/lzny33ho1g45/1Kd1YAitGRb4v0T9uMvygZ/6c97b8dc98c9ea643e032ac0079a03dc/best-spreadsheet-software.jpg?fm=avif&q=31&fit=thumb&w=1520&h=760"
          alt="Spreadsheet Software"
        />
        <figcaption className="course-figcaption">
          Spreadsheet Software by https://zapier.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Business Intelligence (BI) Platforms */}
      <h5 className="course-h5">Business Intelligence (BI) Platforms</h5>
      <p className="course-p2">
        Microsoft Excel is a widely used tool for performing basic data manipulation, analysis, and visualization. It is favored for its intuitive interface and flexibility in handling various data types. 
        Similarly, Google Sheets offers cloud-based functionality with real-time collaboration, making it ideal for teams working together on data tasks. Both tools are essential for analysts who need to 
        work with structured data in an accessible and efficient way.
      </p>
      
      <figure>
        <img
          className="course-pic"
          src="https://media.mopinion.com/wp-content/uploads/2022/04/13133028/Business-Intelligence-Solutions-Cover.png"
          alt="Business Intelligence (BI) Platforms"
        />
        <figcaption className="course-figcaption">
          Business Intelligence (BI) Platforms by https://mopinion.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Programming Languages */}
      <h5 className="course-h5">Programming Languages</h5>
      <p className="course-p2">
        Programming skills are vital for deeper data analysis. Python is a versatile and widely adopted language in data analytics and machine learning, known for powerful libraries such as Pandas, NumPy, and Scikit-learn. R is another key language, 
        primarily used for statistical computing and creating advanced visualizations. Both languages allow analysts to perform complex data tasks that go beyond the capabilities of traditional BI tools or spreadsheets.
      </p>
      
      <figure>
        <img
          className="course-pic"
          src="https://www.wscubetech.com/blog/wp-content/uploads/2025/03/programming-languages-for-data-analytics.webp"
          alt="Programming Languages"
        />
        <figcaption className="course-figcaption">
          Programming Languages by https://www.wscubetech.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      {/* Database Query Languages */}
      <h5 className="course-h5">Database Query Languages</h5>
      <p className="course-p2">
        SQL (Structured Query Language) is the standard language used for querying and managing data in relational databases. It allows analysts to retrieve, filter, join, 
        and transform data efficiently, making it an indispensable tool for working with structured datasets stored in systems like MySQL, PostgreSQL, or Microsoft SQL Server. 
        Mastery of SQL is foundational for any role that involves accessing and analyzing large volumes of data.
      </p>
      
      <figure>
        <img
          className="course-pic"
          src="https://optim.tildacdn.one/tild6262-6661-4034-b164-383063636462/-/format/webp/What_is_SQL_Database.png.webp"
          alt="Database Query Languages"
        />
        <figcaption className="course-figcaption">
          Database Query Languages by https://www.alphaservesp.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      <h4 className="course-h4">Final Thoughts</h4>
      <p className="course-p2">
        If you're interested in becoming a Data Analyst and feel drawn to this kind of work—or if you're eager to learn and develop the required skills—there are many resources available today. 
        You can choose from short-term courses, bootcamps, or pursue formal degree programs. This career path is in high demand, offers strong salary potential, and provides clear opportunities for advancement. 
        In today's digital era, Data Analyst is one of the most exciting and essential professions driving innovation and business success across industries.
      </p>
      <br />

      {/* Button Section  */}
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <button className="btmNext" onClick={completeLesson}>
          Finish Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default DA02;
