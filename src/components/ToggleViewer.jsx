import React, { Component } from 'react'

export default class ToggleViewer extends Component {

  state = {
    isVisible: false,
  }

  render() {

    const {isVisible} = this.state;
    return (
      <div className="logIn">
        {isVisible && this.props.children}
    <button onClick={this.toggleView}>{ isVisible ? "hide" : "show" }</button>
      </div>
    )
  }

  toggleView = () => {
    this.setState(({isVisible}) => ({isVisible: !isVisible}))
  }
}
