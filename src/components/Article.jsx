import React, { useEffect } from "react"

function Article({article}) {
  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.created_at}</p>
      <p>{article.author}</p>
      <p>{article.votes} votes</p>
      <p>{article.body.substr(0, 150
  )}...</p>
    </article>
  )
}

export default Article