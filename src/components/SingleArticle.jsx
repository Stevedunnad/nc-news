import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import VoteCaster from './VoteCaster'
import Comments from './Comments'

export default class SingleArticle extends Component {

  state = {
    article: {},
    isLoading: true,
  }

  componentDidMount() {
    console.log('mounted article')
    this.fetchArticle()
  }

  fetchArticle = () => {
    api.getSingleArticle(this.props.article_id)
    .then(article => {
      this.setState({article, isLoading: false})
      console.log('this is article', article)
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

    <Comments article_id={this.props.article_id} />
    </>
    )
  }
}
