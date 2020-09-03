import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://steve-nc-news.herokuapp.com/api'
})

export const getAllArticles = (sort_by, topic) => {
  return axiosInstance
  .get('/articles', {params: {sort_by, topic}})
  .then((res) => {
    return res.data.articles
  })
  .catch((error) => {
    console.log(error)
  })
}

export const getSingleArticle = (article_id) => {
  return axiosInstance
  .get(`/articles/${article_id}`)
  .then(({data: {article}}) => article)
  .catch((error) => {
    console.log(error)
  })
}

export const patchVotes = (id, votes, type) => {
  return axiosInstance
  .patch(`/${type}/${id}`, { inc_votes: votes })
  .catch((error) => {
    console.log(error)
  })
}

export const getArticleComments = (article_id) => {
  return axiosInstance
  .get(`/articles/${article_id}/comments`)
  .then(({data: {comments}}) => comments.reverse())
  .catch((error) => {
    console.log(error)
  })
}

export const postComment = (article_id, username, body) => {
  return axiosInstance
  .post(`/articles/${article_id}/comments`, {
    username,
    body
  })  
  .then(({data: {comment}}) => {
    console.log('post comment', comment)  
  })
}

export const deleteComment = (comment_id) => {
  return axiosInstance
  .delete(`/comments/${comment_id}`)  
  .then(({data: {comment}}) => {
    console.log('delete comment', comment)  
  })
}
