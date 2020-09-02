import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://steve-nc-news.herokuapp.com/api'
})

export const getAllArticles = (sort_by, topic) => {
  return axiosInstance
  .get('/articles', {params: {sort_by, topic}})
  .then((res) => {
    console.log('articles by topic', res.data.articles)
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
