import React from 'react';

const VoteCaster = ({article_id, votes}) => {
  return (
    <section>
      <button>yes!</button>
      {votes}
      <button>no!</button>
    </section>
  );
};

export default VoteCaster;