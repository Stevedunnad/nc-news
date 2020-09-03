import React, { Component } from 'react'

export default class PostComment extends Component {

  state = {
    author: 'cooljmessy',
    created_at: Date.now(),
    body: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {author, created_at, body} = this.state;
    const {value} = e.target;
    this.setState(
      author, 
      created_at, 
      body: value
    )}

    addComment = (e) => {

    }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit}>
        <label htmlFor="commentInput">Add comment:</label>
        <textarea type="textarea" id="commentInput" name="commentInput" placeholder="What's your opinion?"rows="4" cols="50"/>
        <button onClick={this.addComment}>add comment/button>
      </form>
    )
  }
}
