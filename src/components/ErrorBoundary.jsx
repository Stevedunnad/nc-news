import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    console.log('error, errorInfo ->', error, errorInfo)
    this.setState({hasError: true})
  }

  render() {
      return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children
    }
  }

export default ErrorBoundary;