import React from 'react'
import VoteCaster from './VoteCaster'
import DeleteButton from './DeleteButton'

const comment = ({comment}) => {
  return (
    <article>
      <h3>{comment.author}</h3>
      <h4>{comment.created_at}</h4>
      <p>{comment.body}</p>
      <VoteCaster id={comment.comment_id} votes={comment.votes} type={"comments"} />
      <DeleteButton comment_id={comment.comment_id}/>
    </article>
  );
};

export default comment;