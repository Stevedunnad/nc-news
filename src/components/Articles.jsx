import React, { Component } from 'react';
import * as api from '../utils/api'
import Article from './Article'

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortedBy: 'created_at',
    topic: ''
  }

  async componentDidMount() {
    this.fetchArticles(this.state.sortedBy, this.state.topic)
    console.log('the state is', this.state)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.sortedBy !== this.state.sortedBy || prevState.topic !== this.state.topic) {
      await this.fetchArticles(this.state.sortedBy, this.state.topic)
    }
  }

  changeSortedBy = async (sorted_by) => {
    this.setState({
      sortedBy: sorted_by,
      isLoading: false
    })
  }

  changeTopic = async (topic) => {
    this.setState({
      topic: topic,
      isLoading: false
    })
  }

  fetchArticles = async (sortedBy, topic) => {
    this.setState({
      articles: await api.getAllArticles(sortedBy, topic),
      isLoading: false
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Topic is {this.state.topic || 'all'}</h2>
          <button onClick={() => this.changeTopic('')}>all</button>
          <button onClick={() => this.changeTopic('coding')}>coding</button>
          <button onClick={() => this.changeTopic('cooking')}>cooking</button>
          <button onClick={() => this.changeTopic('football')}>football</button>
        </div>
        <div>
          <h2>Sort by {this.state.sortedBy}</h2>
          <button onClick={() => this.changeSortedBy('created_at')}>Date</button>
          <button onClick={() => this.changeSortedBy('author')}>Author</button>
          {!this.state.topic && <button onClick={() => this.changeSortedBy('topic')}>Topic</button>}
          <button onClick={() => this.changeSortedBy('votes')}>Vote</button>
        </div >
        {this.state.articles.map(article => <Article article={article}></Article>)}
      </div>
    );
  }
}

export default Articles;