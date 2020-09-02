import React from 'react';
import * as api from '../utils/api'

const VoteCaster = ({article_id, votes}) => {

  const incrementVote = (e) => {
    api.patchArticleVotes(article_id, 1)
  }

  return (
    <section>
      <button onClick={incrementVote}>yes!</button>
      {votes}
      <button>no!</button>
    </section>
  );
};

export default VoteCaster;