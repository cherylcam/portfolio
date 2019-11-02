import React, { Component } from 'react';
import Particles from 'react-particles-js';
import TextLoop from "react-text-loop";

class Home extends Component{
  componentDidMount() {
    require("./scripts/orange.js");
  }
  
  render(){
    return (
    <div className="home">
      <div className="logo-wrap">
        <a href="/">
            <img src='/portfolio-logo.svg' alt='Cheryl Cam Portfolio Logo'></img>
        </a>
      </div>
      <main>
          <div className="home-intro">
            <span className="name">CHERYL <span>CAM</span></span>
            <div className="text-loop">
              <TextLoop adjustingSpeed={500} interval={3000}>
                <span>Web Developer</span>
                <span>& Web Designer</span>
              </TextLoop>  
            </div>
          </div>
          <div className="orange">
            <img id="orange-desktop" src='/orange-desktop.svg' alt='orange desktop'></img>
          </div>
      </main> 
      <footer>
          <a className="contact-orange" 
              href="/about#contact"
              target="_blank"
              rel="noreferrer noopener">
            <img id="orange-mobile" src='/orange.svg' alt='orange mobile'></img>
            <span>Contact</span>
          </a>
          <span className="copy">&copy; Cheryl Cam</span>
      </footer>
      <Particles className="particles"
          params={{
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  },
              },
              "color": {
                "value": ['#F28B0E']
              },
              "size": {
                  "value": 1.7,
                  "random": true,
                  "anim": {
                      "speed": 3,
                      "size_min": 0.3
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "bottom",
                  "out_mode": "out"
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "opacity_min": 0.05,
                      "speed": 2,
                      "sync": false
                  },
                  "value": 0.7
              }
          },
          "retina_detect": false,
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "size": 6,
                      "distance": 40
                  },
                  "repulse": {
                      "distance": 150,
                      "duration": 4
                  }
              }
          }
      }} />
      
    </div>
    );
  };
}

export default Home;
