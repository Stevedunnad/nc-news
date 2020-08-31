import React, { Component } from 'react';

class Articles extends Component {
  state = {
    thing: []
  }

  componentDidMount() {
    console.log('hello my friend')
    this.setState({
      thing: [{
        title: 'sfdgsdfg',
        body: 2123
      },
      {
        title: 1,
        body: 2123
      }
      ]
    })
    console.log('the state is', this.state)
  }

  // componentDidUpdate = () => {
  //   console.log('updated')
  // }



  render() {
    return (
      <div>
        <div>
          <h2>Sort by</h2>
          <div>Date</div>
          <div>Author</div>
          <div>Topic</div>
          <div>Vote</div>
        </div>
        {this.state.thing.map(athing => <article><h2>{athing.title}</h2><p>{athing.body}</p></article>)}
      </div>
    );
  }
}

export default Articles;