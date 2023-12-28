import React from "react";
import "./Donate.css";

const Donate = (props) => {
  return (
    <div className="donate_main">
      <div className="donate_s1">
        <div className="donate_reason">
          <h3>Why Donate?</h3>
          <p>
            Your generous donations help us make a difference in the lives of
            those in need. With your support, we can continue to provide
            essential services and support to our community.
          </p>
        </div>
        <div className="donate_ways">
          <h3>Ways to donate-</h3>
          <ul>
            <li>
              <span>Online</span>: Visit our website and click on the "Donate"
              button to make a secure online donationz
            </li>
            <li>
              <span>In-person</span>: Drop by our office during business hours
              to make a donation in person
            </li>
            <li>
              <span>By mail</span>: Send a check or money order to our mailing
              address
            </li>
          </ul>
        </div>
      </div>

      <div className="donate_s2">
        <div className="donate_impact">
          <h3>Impact of Your Donation-</h3>
          <h4>By donating to our charity, you are directly contributing to</h4>
          <ul>
            <li> Providing education to deprived individuals</li>
            <li>
              Supporting educational programs for underprivileged children
            </li>
            <li>Offering medical assistance to those in need</li>
            <li>
              Empowering individuals through skills training and employment
              opportunities
            </li>
          </ul>
        </div>
      </div>
      <button className="donate_button">Donate</button>
    </div>
  );
};

export default Donate;
