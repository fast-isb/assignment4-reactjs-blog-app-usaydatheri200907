// BlogList.js
import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import './App.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Blog deleted successfully');
        // Update the state or re-fetch the data to reflect the deletion
        const updatedBlogs = blogs.filter((blog) => blog._id !== blogId);
        setBlogs(updatedBlogs);
      } else {
        console.error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="blog-list">
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} onDelete={handleDeleteBlog} />
      ))}
    </div>
  );
};

export default BlogList;
