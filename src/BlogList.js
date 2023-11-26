// BlogList.js
import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your backend API
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
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
