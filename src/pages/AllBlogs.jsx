import React from "react";

const AllBlogs = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
            <h2>Title: {blog.title}</h2>
            <h3>Author: {blog.author}</h3>
            <p>Contents: {blog.content}</p>
            <p>Date: {blog.date}</p>
            <p>Id: {blog.id}</p>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default AllBlogs;
