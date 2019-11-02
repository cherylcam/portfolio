import React, { Component } from 'react';
import Logo            from './components/Logo';
import Hello           from './components/Hello';
import Intro           from './components/Intro';
import Footer          from './components/Footer';
import BackToTop       from './components/BackToTop';
import ReactDOM from 'react-dom';
import $ from "jquery";

class About extends Component{

  componentDidMount() {
    
    $('body').css({
      'overflow' : 'auto',
    });

    let hash = this.props.location.hash.replace('#', '');
    if (hash) {
      let node = ReactDOM.findDOMNode(this.refs[hash]);
      if (node) {
          node.scrollIntoView();
      }
    }
  
  }

  render(){
    return (
    <div className="about">
      <div className="master-wrap">
        <Logo/>
        <main>
          <Hello/>
          <Intro/> 
        </main> 
        <p ref='contact'></p>
      </div>
      <BackToTop/>
      <Footer/>
    </div>
    );
  };
}

export default About;