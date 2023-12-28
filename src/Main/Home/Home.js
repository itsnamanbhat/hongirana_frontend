import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Card from "../Blog/StoriesCard";

const Home = (props) => {
  return (
    <div className="home_main">
      <div className="home_welcome">
        <div className="welcome_left">
          <div className="welcome-img1">
            <img src="https://th.bing.com/th/id/R.eb7a38c8773fa37bd7457cd41377d676?rik=hDvIJUOdbOUGOQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f04%2fsunrise2pelee.jpg&ehk=8%2b0uYNfXcKb6LCc0W4OXWJNqC5gxQqpoyrIXZPpdWNg%3d&risl=&pid=ImgRaw&r=0"></img>
          </div>
          <div className="welcome-img2">
            <img src="https://th.bing.com/th/id/R.0a687c59c5de4b278d61753cad929c63?rik=rZqr6CgSfYMvhQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fSunrise-Image-Pictures.jpg&ehk=Drb6bWM4Z%2b91ooK%2f%2bRppGY49TDoJ%2bgSedHxWtj6KBnY%3d&risl=&pid=ImgRaw&r=0"></img>
          </div>
        </div>
        <div className="welcome_right">
          <p className="subHeading">Welcome to Hongirana --</p>
          <h3>Let Us come together to make difference</h3>
          <p>
            The secret to happiness lives in us and it is the key to our
            success.The secret to happiness lives in us and it is the key to our
            successThe secret to happiness lives in us and it is the key to our
            success
          </p>
        </div>
      </div>

      <div className="home_aboutUs">
        <div className="aboutUs_left">
          <p className="subHeading">About us--</p>
          <h3>Let Us come together to make difference</h3>
          <p>
            charity is dedicated to making a positive impact in the world. We
            believe in the power of collective action and strive to create
            meaningful change through our initiatives
          </p>
          <div className="aboutUs_mission">
            <div>
              <svg
                className="verified_svg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 26 28"
                fill="none"
              >
                <path
                  d="M12.3832 0.174619C12.5339 0.0624728 12.7168 0.0012797 12.905 1.98505e-05C13.0932 -0.00124 13.2769 0.0574997 13.4291 0.167619C15.7179 1.8243 18.5291 2.81014 20.8085 3.38064C21.9412 3.66415 22.9272 3.84148 23.6279 3.94765C23.97 3.99923 24.3132 4.04319 24.6573 4.07948L24.7101 4.08532H24.7242C24.944 4.10403 25.1488 4.2041 25.2979 4.36571C25.447 4.52733 25.5296 4.7387 25.5294 4.95799V12.8331C25.5294 18.4669 21.7581 25.2173 13.1814 27.9578C13.0059 28.0141 12.817 28.0141 12.6415 27.9578C4.08236 25.222 0 18.4833 0 12.5414V4.95799C0 4.50299 0.35213 4.12265 0.809899 4.08532H0.825158L0.881498 4.07948C0.93197 4.07482 1.00826 4.06782 1.10921 4.05615C1.30875 4.03398 1.60454 3.99898 1.97427 3.94648C2.71375 3.84031 3.75018 3.66181 4.92747 3.37831C7.302 2.80664 10.1754 1.8208 12.3832 0.174619ZM19.6864 9.67019C19.8542 9.50867 19.9506 9.28752 19.9543 9.05538C19.958 8.82324 19.8689 8.59913 19.7064 8.43235C19.5439 8.26557 19.3214 8.16979 19.0878 8.16607C18.8543 8.16235 18.6288 8.251 18.461 8.41252L9.95823 16.5909L7.34073 14.2272C7.16678 14.079 6.94154 14.004 6.71287 14.0182C6.48419 14.0324 6.2701 14.1347 6.11607 14.3033C5.96203 14.4719 5.8802 14.6935 5.88795 14.9211C5.8957 15.1487 5.99243 15.3644 6.15758 15.5222L9.38543 18.4389C9.55098 18.5885 9.7676 18.6698 9.99129 18.6663C10.215 18.6629 10.4289 18.5749 10.5897 18.4203L19.6864 9.67019Z"
                  fill="#219D80"
                />
              </svg>
              <h4>Our Mission</h4>
            </div>
            <p>This section specifies our mission</p>
          </div>
          <div className="aboutUs_vision">
            <div>
              <svg
                className="vision_svg"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="27"
                viewBox="0 0 32 27"
                fill="none"
              >
                <path
                  d="M12.3681 0V2.32875C11.0102 1.77188 9.55419 1.485 8.09816 1.485C5.16973 1.485 2.24131 2.6325 0 4.94437L5.44785 10.5638H7.2638V12.4369C8.67076 13.8881 10.5031 14.6475 12.3517 14.7319V18.5625H7.46012V23.625C7.46012 25.4813 8.93252 27 10.7321 27H27.092C29.8078 27 32 24.7388 32 21.9375V0H12.3681ZM10.5521 10.8169V7.18875H6.82209L5.12065 5.43375C6.0706 5.05561 7.07993 4.86112 8.09816 4.86C10.2904 4.86 12.3354 5.7375 13.8896 7.32375L16.1963 9.70312L15.8691 10.0406C15.4581 10.4687 14.9688 10.8084 14.4297 11.0401C13.8905 11.2719 13.3121 11.391 12.728 11.3906C11.9591 11.3906 11.2065 11.1881 10.5521 10.8169ZM28.728 21.9375C28.728 22.8656 27.9918 23.625 27.092 23.625C26.1922 23.625 25.456 22.8656 25.456 21.9375V18.5625H15.6401V14.1919C16.5726 13.8038 17.4397 13.23 18.1922 12.4538L18.5194 12.1163L23.1493 16.875H25.456V14.4956L15.6401 4.42125V3.375H28.728V21.9375Z"
                  fill="#219D80"
                />
              </svg>
              <h4>Our Vision</h4>
            </div>
            <p>This is the main vision of our organization</p>
          </div>
          <button className="read_more_btn">
            <NavLink to="/AboutUs">Read More</NavLink>
          </button>
        </div>
        <div className="aboutUs_right">
          <div className="about-img1">
            <img src="https://psmarketingimages.s3.amazonaws.com/blog/wp-content/uploads/2018/02/16120446/hand-putting-coins-in-glass-jar-for-giving-and-donation-concept-picture-id813128966.jpg"></img>
          </div>
          <div className="about-img2">
            <ul>
              <li>Together we are going to change the future</li>
              <li>Together we are going to change the future</li>
              <li>Together we are going to change the future</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home_getInvolved">
        <h3>Get Involved--</h3>
        <p>Join us in making difference! There are several ways you can get involved</p>
        <div className="getInvolved_div">
          <div className="getInvolved_img">
            <img src="https://costumecollege.org/wp-content/uploads/2021/11/Education-Importance.jpg"></img>
          </div>
          <div className="getInvolved_list">
            <ul>
              <li>Volunteer your time and skill</li>
              <li>Donate to support our cause</li>
              <li>Spread the word and raise awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
