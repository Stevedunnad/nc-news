import React, { Component } from 'react'

export default class PostComment extends Component {

  state = {
    author: 'cooljmessy',
    created_at: Date.now(),
    body: ''
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="commentInput">Add comment:</label>
        <textarea type="textarea" id="commentInput" name="commentInput" placeholder="What's your opinion?"rows="4" cols="50"/>
      </form>
    )
  }
}
