import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import VoteCaster from './VoteCaster'
import Comments from './Comments'
// import Error from './Error'

export default class SingleArticle extends Component {

  state = {
    article: {},
    isLoading: true,
    // err: null
  }

  componentDidMount() {
    console.log('mounted article')
    // this.fetchArticle()
    api.getSingleArticle(this.props.article_id)
    .then(article => {
      this.setState({article, isLoading: false})
    })
    // .catch((err) => {
    //   console.dir('**', err.response)
    //   this.setState({
    //       isLoading: false,
    //       err: {msg: err.response.data.msg, status: err.response.status}
    //     })
    //   })
  }

  // fetchArticle = () => {
  //   api.getSingleArticle(this.props.article_id)
  //   .then(article => {
  //     this.setState({article, isLoading: false})
  //   })
  //   .catch(({response}) => {
  //     this.setState({
  //         isLoading: false,
  //         err: {msg: response.data.msg, status: response.status}
  //       })
  //     })
  // }

  render() {
    const {isLoading, err} = this.state
    if (isLoading) return <Loader />
    // if (err) return <Error {...err}/>
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
{/* 
    {console.log('this.props.user ->', this.props.user)}

    {this.props.user.length ? ( */}
    <VoteCaster id={article_id} votes={votes} type={"articles"} />
    {/* ) : (
      <p>login to vote!</p>
    )} */}

    <Comments article_id={this.props.article_id} />
    </>
    )
  }
}
