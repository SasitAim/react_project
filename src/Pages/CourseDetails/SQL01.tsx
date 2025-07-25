// import React from 'react';
// import "../../styles/style_course_detail.css";

// const SQL01: React.FC = () => {
//   const handleNext = () => {
//     let storedProgress = parseInt(localStorage.getItem('sqlCourseProgress') || '0');
//     storedProgress = Math.min(storedProgress + 25, 100);
//     localStorage.setItem('sqlCourseProgress', storedProgress.toString());
//     localStorage.setItem("count_process-sql", JSON.stringify(1));
//     window.location.href = '/course/sql-02'; 
//   };
import { useNavigate } from 'react-router-dom'; // เพิ่ม

const SQL01: React.FC = () => {
  const navigate = useNavigate(); // เพิ่ม

  const handleNext = () => {
    let storedProgress = parseInt(localStorage.getItem('sqlCourseProgress') || '0');
    storedProgress = Math.min(storedProgress + 25, 100);
    localStorage.setItem('sqlCourseProgress', storedProgress.toString());
    localStorage.setItem("count_process-sql", JSON.stringify(1));

    navigate('/course/sql-02'); // ✅ เปลี่ยนจาก window.location.href
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">Essential SQL for Everyone Section Part 1</h1>
      <h2 className="course-h2">Introduction to SQL</h2>

      <figure>
        <img
          className="course-pic"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240320150923/SQL-Tutorial.png"
          alt="SQL Pic"
        />
        <figcaption className="course-figcaption">
          SQL picture by https://molodost.bz/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />


      <p className="course-p2">
        SQL, which stands for Structured Query Language, is the standard language...
      </p>

      <p className="course-p2">
        We have learned above what SQL is used for...
      </p>

      <figure>
        <img
          className="course-pic"
          src="https://www.springboard.com/blog/wp-content/uploads/2021/10/what-is-sql-and-how-does-it-work-sample-of-database-of-e-commerce-store-customers.png"
          alt="SQL Table"
        />
        <figcaption className="course-figcaption">
          SQL Table by https://www.mysql.com/ Retrieved July 2025
        </figcaption>
      </figure>
      <br />

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CREATE</td><td className="description-col">Creates a new table...</td></tr>
          <tr><td>ALTER</td><td className="description-col">Modifies an existing database object...</td></tr>
          <tr><td>DROP</td><td className="description-col">Deletes an entire table...</td></tr>
          <tr><td>SELECT</td><td className="description-col">Retrieves certain records...</td></tr>
          <tr><td>INSERT</td><td className="description-col">Creates a record.</td></tr>
          <tr><td>UPDATE</td><td className="description-col">Modifies a record.</td></tr>
          <tr><td>DELETE</td><td className="description-col">Deletes a record.</td></tr>
          <tr><td>GRANT</td><td className="description-col">Gives a privilege to users.</td></tr>
          <tr><td>REVOKE</td><td className="description-col">Takes back privileges granted from users.</td></tr>
        </tbody>
      </table>
      <br />

      <h3 className="course-h3">Let's write some SQL commands...</h3>
      <pre className="course-pre">
{`SELECT * FROM Customers
WHERE Country='Mexico';`}
      </pre>

      <figure>
        <img
          className="course-pic"
          src="https://www.springboard.com/blog/wp-content/uploads/2021/10/sql-commands-select-where.png"
          alt="Query Table 1"
        />
        <figcaption className="course-figcaption">
          SQL Query Table by springboard.com
        </figcaption>
      </figure>
      <br />

      <pre className="course-pre">
{`SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');`}
      </pre>

      <figure>
        <img
          className="course-pic"
          src="https://www.springboard.com/blog/wp-content/uploads/2021/10/sql-commands-and-or.png"
          alt="Query Table 2"
        />
        <figcaption className="course-figcaption">
          SQL Query Table by springboard.com
        </figcaption>
      </figure>
      <br />


      <h2 className="course-h2">You've now learned the fundamentals of SQL...</h2>
      <br />

      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <button className="btmNext" onClick={handleNext}>
          Next Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default SQL01;
