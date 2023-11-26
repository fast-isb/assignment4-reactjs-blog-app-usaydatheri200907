import React, { useState } from 'react';
import BlogList from './BlogList';
import NewBlog from './NewBlog';
import './App.css'; 

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('blogs');

  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('new-blog')}>+</button>
          </li>
        </ul>
      </nav>

      {currentRoute === 'blogs' && <BlogList />}
      {currentRoute === 'new-blog' && <NewBlog />}
    </div>
  );
};

export default App;
