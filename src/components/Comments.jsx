import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import Comment from './Comment'

class Comments extends Component {

  state = {
    comments: [],
    isLoading: true,
    votes: 0
  }

  componentDidMount() {
    this.fetchArticleComments()
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.sortedBy !== this.state.sortedBy || prevState.topic !== this.state.votes) {
  //     await this.fetchArticleComments(this.state.sortedBy, this.state.votes)
  //   }
  // }

  fetchArticleComments = async () => {
    const comments = await api.getArticleComments(this.props.id)

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
      </div>
    );
  }
}

export default Comments;