import React from 'react';
import * as api from '../utils/api'

const DeleteButton = ({id}) => {
  return (
    <button onClick={() => api.deleteComment(id)}>
      Delete
    </button>
  );
};

export default DeleteButton;