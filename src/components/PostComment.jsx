import React, { Component } from 'react'
import * as api from '../utils/api'

export default class PostComment extends Component {

  state = {
    username: 'cooljmessy',
    body: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {username, body} = this.state;
    api.postComment(this.props.id, username, body)
  }
  

    handleChange = (e) => {
      this.setState({body: e.target.value})
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="commentInput">Add comment:</label>
        <textarea onChange={this.handleChange} type="textarea" id="commentInput" name="commentInput" placeholder="What's your opinion?"rows="4" cols="50"/>
        <button>add comment</button>
      </form>
    )
  }
}
