import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import Comment from './Comment'
import PostComment from './PostComment'
import DeleteButton from './DeleteButton'
import VoteCaster from './VoteCaster'
// import comment from './Comment';

class Comments extends Component {

  state = {
    comments: [],
    isLoading: true,
    votes: 0
  }

  componentDidMount() {
    this.fetchArticleComments()
  }

  fetchArticleComments = async () => {
    const comments = await api.getArticleComments(this.props.article_id)
    this.setState({
      comments,
      isLoading: false
    })
  }

  render() {
    console.log('state from grandparent?->', this.props.state)

    const {isLoading} = this.state
    if (isLoading) return <Loader />

    return (
      <div>
          <h2>Comments:</h2>
        {this.state.comments.map(comment => 
        <Comment key={comment.comment_id} comment={comment} fetchArticleComments={this.fetchArticleComments} user="cooljmessy"/>)}
        <PostComment id={this.props.article_id} fetchArticleComments={this.fetchArticleComments} />
      </div>
    );
  }
}

export default Comments;