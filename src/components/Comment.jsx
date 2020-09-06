import React from 'react'
import VoteCaster from './VoteCaster'
import DeleteButton from './DeleteButton'

const comment = ({comment, fetchArticleComments, user}) => {
  
  return (

    <article> 
      <h3>{comment.author}</h3>
      <h4>{comment.created_at}</h4>
      <p>{comment.body}</p>
      {user === "cooljmessy" ? (
      <VoteCaster id={comment.comment_id} votes={comment.votes} type={"comments"} />
      ) : (
        <p>login to vote!</p>
      )}
      <DeleteButton comment_id={comment.comment_id} fetchArticleComments={fetchArticleComments}/>
    </article>
  );
};

export default comment;