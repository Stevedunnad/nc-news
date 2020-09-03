import React from 'react';
import VoteCaster from './VoteCaster'

const comment = ({comment}) => {
  return (
    <article>
      <h3>{comment.author}</h3>
      <h4>{comment.created_at}</h4>
      <p>{comment.body}</p>
      {/* <VoteCaster id={comment_id} votes={votes} type={"comments"} /> */}
    </article>
  );
};

export default comment;