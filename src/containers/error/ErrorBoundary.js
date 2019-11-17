import React, { Component } from 'react';
 
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null
    };
  }

 
  static getDerivedStateFromError(error) {
    return {
      error: error.message
    };
  }
 
  componentDidCatch(error, errorInfo) {
    console.error('Something bad happened!', error, errorInfo);
  }
 
  render() {
    const {error} = this.state
    if (error) {
      return (
        <div>
          <h1>Something went wrong :(</h1>
          <p>
            {error}
          </p>
        </div>
      )
    }
    return this.props.children;
  }
}
 
export default ErrorBoundary;