import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>nc news</h1>
      <nav>
        <div>Home</div>
        <div>Articles</div>
        <div>Topics</div>
      </nav>
      <main>
        <div>
          <h2>Sort by</h2>
          <div>Date</div>
          <div>Author</div>
          <div>Topic</div>
          <div>Vote</div>
        </div>
        <article>
          <h3>Title</h3>
          <p>Body</p>
        </article>
      </main>
    </div>
  );
}

export default App;
