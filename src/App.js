import React from 'react';
import { Link, Router } from '@reach/router'
import './App.css';
import Articles from './components/Articles'
import Home from './components/Home'
import Topics from './components/Topics'
import SingleArticle from './components/SingleArticle'

class App extends React.Component {

  state= {
    author: 'cooljmessy'
  }

  render() {
    const { user } = this.state;
  return (
    <div className="App">
      <h1>nc news</h1>
      <p>User: {user}</p>
      <button onClick={() => this.setState({user: null})}>
        log out
      </button>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
      <main>
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Topics path="/topics" />
          <SingleArticle path="/articles/:article_id" />
        </Router>
        
      </main>
    </div>
  );
  }
}
  

export default App;
