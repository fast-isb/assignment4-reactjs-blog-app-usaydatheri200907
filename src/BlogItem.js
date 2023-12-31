// BlogItem.js
import React, { useState } from 'react';
import './App.css';

const BlogItem = ({ blog, onDelete }) => {
  const [showComments, setShowComments] = useState(false);

  const handleCommentsClick = () => {
    setShowComments(!showComments);
  };

  const handleDeleteClick = () => {
    onDelete(blog._id);
  };

  return (
    <div className="blog-item">
      <div className="title-author">
        <h2 className="title">{blog.title}</h2>
        <p className="author">Author: {blog.author}</p>
      </div>
      <p className="content">{blog.content}</p>
      <p className="date">Created at: {blog.creationDate}</p>
      <p className="comments" onClick={handleCommentsClick}>
        Comments: {showComments ? 'Hide Comments' : 'Show Comments'}
      </p>
      <button className="deleteButton" onClick={handleDeleteClick}>
        Delete
      </button>
      {showComments && (
        <div className="comment-section">
          {blog.comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogItem;
