import React from "react";

import "./Blog.css";
import Card from "./StoriesCard";
import Post from "./Post";

const Blog = () => {
  return (
    <div className="main_container">
      <div className="subcontainer1">
        <div className="recentPosts_c">
            <h2>Recent Posts </h2>
            <div className="post_div">
                <Post />
                <Post/>
                <Post/>
            </div>
        </div>
        <div className="upcomingEvents_c">
        <h2>Upcoming Events </h2>
            <div className="post_div">
                <Post />
                <Post/>
                <Post/>
            </div>
        </div>
      </div>
      <div className="subcontainer2">
      
        <h2>
          Success Stories of students who got help through this organisation
        </h2>
        <div className="card_div">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Blog;
