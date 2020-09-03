import React from 'react';
import * as api from '../utils/api'

const DeleteButton = (props) => {

  const handleClick = async () => {
    await api.deleteComment(props.comment_id)
    await props.fetchArticleComments()
  }

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButton;