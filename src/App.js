import React from 'react';
import { Link, Router } from '@reach/router'
import './App.css';
import Articles from './components/Articles'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'

class App extends React.Component {

  state = {
    user: 'cooljmessy',

  }

  handleClick = (e) => {
    !this.state.user.length ? this.setState({ user: 'cooljmessy' })
      : this.setState({ user: '' })
  }

  render() {
    console.log('state->', this.state)

    const { user } = this.state;
    return (
      <div className="App">
        <h1>nc news</h1>
        <p>User: {user}</p>

        <button onClick={this.handleClick}>{user ? "logout" : "login"}</button>
        <nav>
          <Link to="/articles">All Articles</Link>
        </nav>
        <main>
          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <SingleArticle path="/articles/:article_id" state={user} />
            {/* <Error path="" /> */}
          </Router>

        </main>
      </div>
    );
  }
}

export default App;
