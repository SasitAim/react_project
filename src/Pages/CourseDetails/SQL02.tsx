import React from "react";
import "../../styles/style_course_detail.css";

const SQL02: React.FC = () => {
  const completeLesson = () => {
    let storedProgress = parseInt(localStorage.getItem("sqlCourseProgress") || "0");
    storedProgress = Math.min(storedProgress + 25, 100);
    localStorage.setItem("sqlCourseProgress", storedProgress.toString());
    localStorage.setItem("count_process-sql", JSON.stringify(2));
    window.location.href = "/courses";
  };

  return (
    <div>
      <br />
      <h1 className="course-h1">Essential SQL for Everyone Section Part 2</h1>
      <h2 className="course-h2">How SQL Works When Joining Tables</h2>

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
        An SQL join clause is like a join operation in relational algebra. It combines the columns from one or more
        tables in a relational database to create a set that can be saved as a table or used as it is. A JOIN is a means
        for combining columns from one or more tables by using values common to each. A critical skill, and a frequently
        asked interview question, JOINS help you get a lot of work done with complex databases. Having the ability to
        manipulate JOIN queries with precision will give you an added advantage.
      </p>

      <p className="course-p2">
        There are 4 major JOINS to combine data or rows from two or more tables based on a common field between them.
        Different types of Joins are:
      </p>

      <ul className="course-ul">
        <li>INNER JOIN</li>
        <li>LEFT JOIN</li>
        <li>RIGHT JOIN</li>
        <li>FULL JOIN</li>
      </ul>

      <h3 className="course-h3">1. Inner Join</h3>
      <p className="course-p2">
        An Inner Join returns only the rows with matching values in both tables. It displays the data from all columns of
        the matched rows from both tables.
      </p>
      <pre className="course-pre">
{`SELECT *
FROM table1
INNER JOIN table2
ON table1.column1_name = table2.column2_name;`}
      </pre>

      <h3 className="course-h3">2. Left Join</h3>
      <p className="course-p2">
        A Left Join returns all rows from the left table, along with the matching rows from the right table. If there is
        no match in the right table, the result will contain NULL values for columns from the right table.
      </p>
      <pre className="course-pre">
{`SELECT *
FROM table1
LEFT JOIN table2
ON table1.column1_name = table2.column2_name;`}
      </pre>

      <h3 className="course-h3">3. Right Join</h3>
      <p className="course-p2">
        A Right Join returns all rows from the right table, along with the matching rows from the left table. If there is
        no match in the left table, the result will contain NULL values for columns from the left table.
      </p>
      <pre className="course-pre">
{`SELECT *
FROM table1
RIGHT JOIN table2
ON table1.column1_name = table2.column2_name;`}
      </pre>

      <h3 className="course-h3">4. Full Outer Join</h3>
      <p className="course-p2">
        A Full Outer Join returns all rows from both tables. If there is no match from either table, the result will
        include NULL values in the columns where data is missing.
      </p>
      <pre className="course-pre">
{`SELECT *
FROM table1
FULL OUTER JOIN table2
ON table1.column1_name = table2.column2_name;`}
      </pre>

      <div style={{ display: "flex", marginTop: "1rem" }}>
        <button className="btmNext" onClick={completeLesson}>
          Finish Section
        </button>
      </div>
      <br />
    </div>
  );
};

export default SQL02;
