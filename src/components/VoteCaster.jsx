import React from 'react';
import * as api from '../utils/api'

class VoteCaster extends React.Component {

  state = {
    optimisticVotes: 0
  }

  changeVote = (vote) => {
    api.patchArticleVotes(this.props.id, vote, this.props.type)
    this.setState(currentState => {
      return {optimisticVotes: currentState.optimisticVotes + vote}
    })
  }

  render () {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <section>

        <button onClick={(e) => {this.changeVote(-1)}}
          disabled = {optimisticVotes === -1}>
          vote -
          </button>

          {' '}{ votes + optimisticVotes }{' '} 
          {/* refactor with css */}

        <button onClick={(e) => {this.changeVote(1)}}
          disabled = { optimisticVotes === 1 }>
          vote +
          </button>

      </section>
    );
  }
};

export default VoteCaster;