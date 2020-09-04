import React from 'react'
import VoteCaster from './VoteCaster'
import DeleteButton from './DeleteButton'
import ToggleViewer from './ToggleViewer';

const comment = ({comment, fetchArticleComments}) => {
  return (
    <article> 
      <h3>{comment.author}</h3>
      <h4>{comment.created_at}</h4>
      <p>{comment.body}</p>
      <ToggleViewer>
      <VoteCaster id={comment.comment_id} votes={comment.votes} type={"comments"} />
      <DeleteButton comment_id={comment.comment_id} fetchArticleComments={fetchArticleComments}/>
      </ToggleViewer>
    </article>
  );
};

export default comment;