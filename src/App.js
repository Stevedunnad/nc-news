import React from 'react';
import { Link, Router } from '@reach/router'
import './App.css';
import Articles from './components/Articles'
import Home from './components/Home'
import Topics from './components/Topics'
import SingleArticle from './components/SingleArticle'
import ToggleViewer from './components/ToggleViewer'
// import Error from './components/SingleArticle'

class App extends React.Component {

  state = {
    author: 'cooljmessy',

  }

  handleClick = (e) => {
    !this.state.author.length ? this.setState({author: 'cooljmessy'}) 
    : this.setState({author: ''})
  }

  render() {
    const { author } = this.state;
  return (
    <div className="App">
      <h1>nc news</h1>
      <p>User: {this.state.author}</p>

      <button onClick={this.handleClick}>{ author ? "logout" : "login" }</button>
      <nav>
        <Link to="/articles">All Articles</Link>
      </nav>
      <main>
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <SingleArticle path="/articles/:article_id" />
          {/* <Error path="" /> */}
        </Router>
        
      </main>
    </div>
  );
  }
}
  
export default App;
