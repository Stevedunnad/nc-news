import React, { Component } from 'react';
import * as api from '../utils/api'

class Articles extends Component {
  state = {
    articles: [],
    sortedBy: 'created_at'
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

  changeSortedBy = (sorted_by) => {
    this.setState({
      sortedBy: sorted_by
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Sort by {this.state.sortedBy}</h2>
          <button onClick={() => this.changeSortedBy('created_at')}>Date</button>
          <button onClick={() => this.changeSortedBy('author')}>Author</button>
          <button onClick={() => this.changeSortedBy('topic')}>Topic</button>
          <button onClick={() => this.changeSortedBy('vote')}>Vote</button>
        </div>
        {this.state.articles.map(article => <article><h2>{article.title}</h2><p>{article.body}</p></article>)}
      </div>
    );
  }
}

export default Articles;