import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'

class Comments extends Component {

  state = {
    comments: [],
    isLoading: true
  }

  componentDidMount() {
    api.getArticleComments(this.props.article_id)
    .then(comments => {
      console.log('->', comments)
      this.setState({comments, isLoading: false})
    })
  }

  

  render() {
    return (
      <div>
        <h1>Comments</h1>
      </div>
    );
  }
}

export default Comments;