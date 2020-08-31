import axios from 'axios';

export const getAllArticles = (sort_by, topic) => {
  return axios
  .get('https://steve-nc-news.herokuapp.com/api/articles', {params: {sort_by, topic}})
  .then((res) => {
    console.log('articles by topic', res.data.articles)
    return res.data.articles
  })
  .catch((error) => {
    console.log(error)
  })
}

// export const getCodingArticles = () => {
//   return axios.get('https://steve-nc-news.herokuapp.com/api/articles?topic=coding')
//   .then((res) => {
//     return res.data.articles
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }
