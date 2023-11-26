import React, { useState } from 'react';
import './NewBlog.css';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const creationDate = new Date().toISOString(); 

    const newBlogData = {
      title,
      author,
      content,
      creationDate,
    };

    try {
      const response = await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlogData),
      });

      if (response.ok) {
        console.log('Blog created successfully');
      } else {
        console.error('Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
