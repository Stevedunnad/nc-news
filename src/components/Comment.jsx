import React from 'react'
import VoteCaster from './VoteCaster'
import DeleteButton from './DeleteButton'

const Comment = ({ comment, fetchArticleComments }) => {
  const user = 'cooljmessy'
  return (
    <article>
      <h3>{comment.author}</h3>
      <h4>{comment.created_at}</h4>
      <p>{comment.body}</p>
      {user === comment.author ? (
        <VoteCaster id={comment.comment_id} votes={comment.votes} type={"comments"} />
      ) : (
          <p>login to vote!</p>
        )}
      {user === comment.author ?
        <DeleteButton comment_id={comment.comment_id} fetchArticleComments={fetchArticleComments} /> :
        <p>you cant delete this</p>}
    </article>
  );
};

export default Comment;