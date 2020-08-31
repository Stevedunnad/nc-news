import React, { Component } from 'react';

class Articles extends Component {
  state = {}

  componentDidMount() {
    console.log('mounted')
  }

  // componentDidUpdate() {
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
        <article>
          <h3>Title</h3>
          <p>Body</p>
        </article>
      </div>
    );
  }
}

export default Articles;