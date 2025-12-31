import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item slide-up">
            <div className="education-date">
              <span>Sept 2024 - Present</span>
            </div>
            <div className="education-content">
              <h3>Portland State University, Honor's College</h3>
              <p className="education-degree">Bachelor of Science in Computer Science</p>
              <p className="education-gpa">GPA: 3.91</p>
              <div className="education-details">
                <h4>Relevant Coursework:</h4>
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>Algorithms and Complexity</li>
                  <li>Operating Systems</li>
                  <li>Matrices</li>
                  <li>Database Management Systems</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="education-item slide-up">
            <div className="education-date">
              <span>Sept 2022 - June 2024</span>
            </div>
            <div className="education-content">
              <h3>Portland Community College</h3>
              <p className="education-degree">Associate of Science</p>
              <p className="education-gpa">GPA: 3.8</p>
              <div className="education-details">
                <p>Early College High School Program: Simultaneously earned AS degree and high school diploma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 