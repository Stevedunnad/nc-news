import React, { Component } from 'react';
import * as api from '../utils/api'

class Articles extends Component {
  state = {
    articles: [],
    sortedBy: 'created_at',
    topic: ''
  }

  async componentDidMount() {
    console.log('hello my friend')
    this.fetchArticles(this.state.sortedBy)
    console.log('the state is', this.state)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.sortedBy !== this.state.sortedBy) {
      await this.fetchArticles(this.state.sortedBy)
    }
  }

  changeSortedBy = async (sorted_by) => {
    this.setState({
      sortedBy: sorted_by
    })
  }

  changeTopic = async (topic) => {
    this.setState({
      topic: topic
    })
  }

  fetchArticles = async (sortedBy) => {
    this.setState({
      articles: await api.getAllArticles(sortedBy)
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Topic is {this.state.topic}</h2>
          <button onClick={() => this.changeTopic('')}>all</button>
          <button onClick={() => this.changeTopic('coding')}>coding</button>
          <button onClick={() => this.changeTopic('cooking')}>cooking</button>
          <button onClick={() => this.changeTopic('football')}>football</button>
        </div>
        <div>
          <h2>Sort by {this.state.sortedBy}</h2>
          <button onClick={() => this.changeSortedBy('created_at')}>Date</button>
          <button onClick={() => this.changeSortedBy('author')}>Author</button>
          <button onClick={() => this.changeSortedBy('topic')}>Topic</button>
          <button onClick={() => this.changeSortedBy('votes')}>Vote</button>
        </div>
        {this.state.articles.map(article => <article>
          <h2>{article.title}</h2>
          <p>{article.created_at}</p>
          <p>{article.author}</p>
          <p>{article.votes} votes</p>
          <p>{article.body}</p>
        </article>)}
      </div>
    );
  }
}

export default Articles;