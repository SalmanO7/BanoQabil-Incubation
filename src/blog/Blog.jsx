import React from "react";
import BlogImg1 from "../assets/blog1.jpeg";
import BlogImg2 from "../assets/blog2.png";
import BlogImg3 from "../assets/blog3.jpeg";
import "./blog.css";

const BlogData = [
  {
    id: 1,
    title: "Local Storage in Flutter",
    Img: BlogImg1,
  },
  {
    id: 2,
    title: "Customizing Widgets in Flutter",
    Img: BlogImg2,
  },
  {
    id: 3,
    title: "Mastering App Routing in Flutterr",
    Img: BlogImg3,
  },
];

const Blog = () => {
  return (
    <div className="container blog-container" id="blog" >
      <h1 className="container-heading">Recent Blogs</h1>
      <p className="container-para">
        Dive into my latest blog posts, where I share insights, tips, and
        experiences on mobile development, Flutter, and cutting-edge tech
        trends.
      </p>
      <div className="blog-cards">
        {BlogData.map((blogCard) => {
          return (
            <a href="https://medium.com/@muhammad-mohsin" key={blogCard.id}>
              <div className="card">
                <img
                  src={blogCard.Img}
                  alt={blogCard.title}
                  className="blog-img"
                />
                <h4 className="card-heading"> {blogCard.title}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
