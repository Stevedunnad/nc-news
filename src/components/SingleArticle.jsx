import React, { Component } from 'react'
import * as api from '../utils/api'

export default class SingleArticle extends Component {

  state = {
    article: {},
    isLoading: true
  }

  componentDidMount() {
    api.getSingleArticle()
    .then(article => {
      this.setState({article, isLoading: false})
    })
  }

  render() {
    console.log('hey, props ->', this.props)
    return (
      <div>
        <h1>Single article</h1>
      </div>
    )
  }
}
