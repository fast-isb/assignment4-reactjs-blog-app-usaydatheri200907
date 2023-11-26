import React from 'react';
import './App.css';

const BlogItem = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Blog: {blog.content}</p>
      <p>Average Rating: {blog.averageRating}</p>
      <p>Created at: {blog.creationDate}</p>
      <p>Comments: <p>{blog.comments}</p></p>
    </div>
  );
};

export default BlogItem;
