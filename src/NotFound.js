import React, { Component } from 'react';
import Logo                 from './components/Logo';

class NotFound extends Component{

  render() {
    return  (
      <div className="notfound">
        <Logo/>
        <h1>Oops! It looks like the page you’re looking for does not exist.</h1>
      </div>
    )};
}

export default NotFound;