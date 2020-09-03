import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import VoteCaster from './VoteCaster'
import Comments from './Comments'
import PostComment from './PostComment'

export default class SingleArticle extends Component {

  state = {
    article: {},
    isLoading: true,
  }

  componentDidMount() {
    api.getSingleArticle(this.props.article_id)
    .then(article => {
      this.setState({article, isLoading: false})
    })
  }

  render() {
    const {isLoading} = this.state
    if (isLoading) return <Loader />

    const {
      article_id, 
      title, 
      body, 
      created_at, 
      votes,
      author,} = this.state.article;

    return (
      <>
      <article>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{created_at}</p>
      <p>{body}</p>
    </article>

    {this.props.author ? (
    <VoteCaster id={article_id} votes={votes} type={"articles"} />
    ) : (
      <p>login to vote!</p>
    )}

    <Comments id={this.props.article_id} />
    <PostComment id={this.props.article_id}  />
    </>
    )
  }
}
  