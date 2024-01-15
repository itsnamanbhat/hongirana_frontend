import React from "react";
import Card from "../../components/FormElements/Card";
import "./People.css";

const People = (props) => {
  return (
    <div className="people_main">
      <h2 className="people_heading">PEOPLE</h2>
      <div className="card_section">
        <div className="people_trustee">
          <Card
            mainClass="peopleCard"
            imageClass="image"
            topic="Trustees"
            description="People who will be with us througout the journey"
            buttonType="Trustee"
          />
        </div>
        <div className="people_mentors">
          <Card
            mainClass="peopleCard"
            imageClass="image"
            topic="Mentors"
            description="the mentors of the students"
            buttonType="Mentors"
          />
        </div>
        <div className="people_volunteers">
          <Card
            mainClass="peopleCard"
            imageClass="image"
            topic="volunteers"
            description="the ones with the open heart"
            buttonType="volunteers"
          />
        </div>
      </div>
    </div>
  );
};

export default People;
