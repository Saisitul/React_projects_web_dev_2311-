import React from "react";

const Bloglist = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogss.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={()=>props.handleDeletee(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;



