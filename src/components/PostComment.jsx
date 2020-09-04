import React, { Component } from 'react'
import * as api from '../utils/api'

export default class PostComment extends Component {

  state = {
    username: 'cooljmessy',
    body: ''
  }

  handleChange = (e) => {
    this.setState({body: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({body: ''})
    const {username, body} = this.state;
    this.state.body.length && await api.postComment(this.props.id, username, body)
    this.props.fetchArticleComments()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="commentInput">Add comment:</label>
        <textarea onChange={this.handleChange}  value={this.state.body} type="textarea" 
        id="commentInput" name="commentInput" placeholder="What's your opinion?"
        rows="4" cols="50"/>
        <button>add comment</button>
      </form>
    )
  }
}
