import React, { Component } from 'react';
import * as api from '../utils/api'

class Articles extends Component {
  state = {
    articles: []
  }

  async componentDidMount() {
    console.log('hello my friend')
    this.setState({
      articles: await api.getAllArticles()
    })
    console.log('the state is', this.state)
  }

  // componentDidUpdate = () => {
  //   console.log('updated')
  // }



  render() {
    return (
      <div>
        <div>
          <h2>Sort by</h2>
          <div>Date</div>
          <div>Author</div>
          <div>Topic</div>
          <div>Vote</div>
        </div>
        {this.state.articles.map(article => <article><h2>{article.title}</h2><p>{article.body}</p></article>)}
      </div>
    );
  }
}

export default Articles;