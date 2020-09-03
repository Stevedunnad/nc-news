import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import Comment from './Comment'
import PostComment from './PostComment'

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

    const {isLoading} = this.state
    if (isLoading) return <Loader />

    return (
      <div>
          <h2>Comments:</h2>
        {this.state.comments.map(comment => <Comment key={comment.comment_id} comment={comment} />)}
        <PostComment id={this.props.article_id} />
      </div>
    );
  }
}

export default Comments;