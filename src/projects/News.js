import React, { Component } from 'react';
import $ from "jquery";
import Logo                 from '../components/Logo';
import Footer               from '../components/Footer';
import BackToTop            from '../components/BackToTop';
import '../css/styles.css';


class News extends Component{

  componentDidMount () {
    require("../scripts/fade-up.js");

    $('body').css({
      'overflow' : 'auto',
    });
  }

  render(){
    return (
        <div className="news">
          <div className="master-wrap">
          <Logo/>
          <section className="project-opening">
            <div className="banner">
            <picture>
              <source media="(min-width: 900px)" srcSet="./images/projects/react-news/banner.png"></source>
              <source media="(min-width: 700px)" srcSet="./images/projects/react-news/banner-1000.png"></source>
              <img data-src="./images/projects/react-news/banner-800.png" alt="React news Banner" src="./images/projects/react-news/banner-800.png"></img>
            </picture>
            </div>
            <div className="scroll-down">
              <a href="#detail" aria-label="Scroll down to see more detail of this project">DETAIL</a>
            </div>
          </section>

          <main>
            <section className="detail-wrap" id="detail">
              <section className="short-intro" data-aos="fade-up">
                <h1><span className="highline">CTC</span> NEWS</h1>
                <p>A news feed web application created with React.</p>
                <small></small>
                <small></small>
              </section>

              <section className="description-wrap" data-aos="fade-up">
                <div className="des-left">
                  <div className="tools">
                    <span>React</span>
                    <span>APIs</span>
                    <span>CSS</span>
                    <span>Adobe XD</span>
                    <span>Illustrator</span>
                  </div>

                  <div className="visit-website">
                    <a href="https://ctcnews.cherylcam.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Click to visit live website">
                      VITSIT WEBSITE </a>
                  </div>
                </div>
                
                <div className="des-right">
                <p>CTC News is a website application that was 
                  built with React, fetching data from <a href="https://newsapi.org/" target="_blank">News APIs</a>. 
                  The site is cross-browser compatible and 
                  fully responsive. It displays the latest news in the world in a visually appealing way. 
                  Also, cookie is set for the search bar for better user-experience.
                </p>
                </div>
              </section>
            </section>
          </main>

          <section className="work-nav">
            <a href="/movie" aria-label="Previous Project"><span>&lsaquo;</span> MAZZY</a>
            <a href="/work" aria-label="Back to Work Page">- BACK -</a>
            <span></span>
          </section>

          </div>
          <BackToTop/>
          <Footer/>
        </div>
    );
  };
}

export default News;
