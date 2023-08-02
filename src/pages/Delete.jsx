import React from "react";
import { useParams } from "react-router-dom";
import AllBlogs from "./AllBlogs";
import { Route, Routes, Link } from "react-router-dom";
import AddBlog from "./AddBlog";

/* 

  
  
  TODO: Implement the Delete Post button functionality

  1) First task: When a user clicks the 'Delete Post' button, your task is to ensure that the blog post with the specified id is removed from the blogs array in the App.js.

  2) Second task: Once the blog post is deleted, you need to redirect the application to the 'AllBlogs' page, with a route of '/blogs'.


  Optional TODO: As an additional exercise, you can hide the 'Delete Post' button if the specified id is invalid (i.e., if no blog post has that id). T
  */

const Delete = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  let deleted = [];

  let filteredArray = blogs.filter((blog) => {
    return blog.id == id;
  });

  return (
    <>
      <AllBlogs blogs={filteredArray} />
      <button
        onClick={(e) => {
          deleted = blogs.filter(function (blog) {
            return blog !== blogs[id - 1];
          });
          setBlogs(deleted);
          console.log(deleted);
        }}
      >
        <Link to="/blogs"> Delete Post </Link>
      </button>
      {/* <Routes>
        <Route path="/blogs" blogs={deleted} />
      </Routes> */}
    </>
  );
};

export default Delete;
