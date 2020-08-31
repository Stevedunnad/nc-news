import React, { Component } from 'react';

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    console.log('hello my friend')
    this.setState({
      articles: [{
        article_id: 1,
        title: 'articley stuff',
        body: 'body'
      }]
    })
    console.log('the state is', this.state)
  }

  // componentDidUpdate = () => {
  //   console.log('updated')
  // }

  

  render() {
    return (
      <div>
        {this.state.articles.map(article => <div key={article.article_id}>hello</div>)}
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
      </div>
    );
  }
}

export default Articles;