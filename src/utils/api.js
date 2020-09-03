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

export const patchArticleVotes = (id, votes, type) => {
  return axiosInstance
  .patch(`/${type}/${id}`, { inc_votes: votes })
  .then(({data}) => {
  })
  .catch((error) => {
    console.log(error)
  })
}

export const getArticleComments = (article_id, sort_by, votes) => {
  return axiosInstance
  .get(`/articles/${article_id}/comments`, {params: {sort_by, votes}})
  .then(({data: [comments]}) => comments)
  .catch((error) => {
    console.log(error)
  })
}
