import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import VoteCaster from './VoteCaster'

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
      <p>{created_at}</p>
      <p>{author}</p>
      <p>{body}</p>
    </article>
    <VoteCaster id={article_id} votes={votes} type={"articles"} />
    </>
    )
  }
}
