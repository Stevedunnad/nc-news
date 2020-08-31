import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Articles'

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
        <Article></Article>
      </main>
    </div>
  );
}

export default App;
