import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'

export default class SingleArticle extends Component {

  state = {
    article: {},
    isLoading: true
  }

  componentDidMount() {
    api.getSingleArticle(this.props.article_id)
    .then(article => {
      this.setState({article, isLoading: false})
    })
  }

  render() {
    console.log('hey, props ->', this.props)
    const {isLoading, article} = this.state
    if (isLoading) return <Loader />
    return (
      <div>
        <h1>Single article</h1>
      </div>
    )
  }
}
