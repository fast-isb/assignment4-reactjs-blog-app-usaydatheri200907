// BlogItem.js
import React from 'react';

const BlogItem = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>{blog.content}</p>
      <p>Average Rating: {blog.averageRating}</p>
      <p>Created at: {blog.creationDate}</p>
      <p>Comments: {<p>blog.comments</p>}</p>
    </div>
  );
};

export default BlogItem;
