import React from "react"
import { Link } from '@reach/router'

function Article({article}) {
  return (
    <article>
      <Link to={`/articles/${article.article_id}`}>
      <h2>{article.title}</h2>
      </Link>
      <p>{article.created_at}</p>
      <p>{article.author}</p>
      <p>{article.body.substr(0, 150)}...</p>
    </article>
  )
}

export default Article