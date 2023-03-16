import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleClick = (title) => {
    alert(`You clicked: ${title}`);
  };

  return (
    <div className="App">
      <div className='container' style={{textAlign: 'center'}}>
        Fake Rest API
      {posts.map(post => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button className='button' onClick={() => handleClick(post.title)}>Alert</button>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default App;