import React from "react";

import "./AboutUs.css";

const AboutUs = (props) => {
  return (
    <div className="AboutUs_main">
      <div className="AboutUs_s1">
        <div className="AboutUs_vision">
          <h3>Vision</h3>
          <p>
            To awaken Indian values, culture, and patriotism and inspire the
            youth to engage in building a strong, abled, self-reliant &
            harmonious society
          </p>
        </div>
        <div className="AboutUs_mission">
          <h3>Mission</h3>
          <p>
            To build Physical. Mental, Emotional, Intellectual, and spiritual
            development in the youth through temples and colleges and to bring
            about positive change in society through service activities.
          </p>
        </div>
        <div className="AboutUs_action">
          <h3>Action</h3>
          <p>
            Alaya, Vidyalaya & Devalaya centered on education, health,
            self-reliance, samskar and conducting samarasya (harmonious)
            activities.
          </p>
        </div>
      </div>

      <div className="AboutUs_s2">
        <div className="AboutUs_studentSelection">
          <h3>Student Selection Criteria</h3>
          <div className="criteria economic_c">
          <h4>Economic Background: </h4>
          <p>Less than 5LPA</p>
          </div>
          <div className="criteria social_c">
          <h4>
            Social Background:</h4>
            <p>Personal visits from committee members and
            documenting the household and their surrounding area.</p>
          </div>
          <div className="criteria geographical_c">
          <h4>
            Geographical criteria:
          </h4>
          <p> Candidates from rural areas and
            underdeveloped areas of cities will be considered.</p>
          </div>
         <div className="criteria academic_c"> <h4>Academic Criteria:</h4>
          <ul>
            <li>
              Students with moderate academic excellence ( 50% to 75% academic
              performance in high school grade) who have potential but lack the
              proper support system to achieve their goals.
            </li>
            <li>
              Students who got low grades due to adverse personal situations and
              show potential in achieving their dreams will be considered.
            </li>
            <li>
              The assumption here is that students with Excellent grades will
              most likely get scholarships from corporate or governmental
              entities. However, if this additional scholarship or support is
              not available, these students will be considered.
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
