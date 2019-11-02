import React, { Component } from 'react';
import $ from "jquery";
import Logo                 from '../components/Logo';
import Footer               from '../components/Footer';
import BackToTop            from '../components/BackToTop';
import '../css/styles.css';


class Movie extends Component{

  componentDidMount () {
    require("../scripts/fade-up.js");

    $('body').css({
      'overflow' : 'auto',
    });
  }

  render(){
    return (
        <div className="movie">
          <div className="master-wrap">
          <Logo/>
          <section className="project-opening">
            <div className="banner">
            <picture>
              <source media="(min-width: 900px)" srcSet="./images/projects/react-movie/banner.png"></source>
              <source media="(min-width: 700px)" srcSet="./images/projects/react-movie/banner-1000.png"></source>
              <img data-src="./images/projects/react-movie/banner-800.png" alt="React Movie Banner" src="./images/projects/react-movie/banner-800.png"></img>
            </picture>
            </div>
            <div className="scroll-down">
              <a href="#detail" aria-label="Scroll down to see more detail of this project">DETAIL</a>
            </div>
          </section>

          <main>
            <section className="detail-wrap" id="detail">
              <section className="short-intro" data-aos="fade-up">
                <h1><span className="highline">MAZZY</span> MOVIE</h1>
                <p>A movie feed web application created with React.</p>
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
                    <a href="https://mazzymovie.cherylcam.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Click to visit live website">
                      VITSIT WEBSITE </a>
                  </div>
                </div>
                
                <div className="des-right">
                <p>Mazzy Movie is a Movie Database website application that was 
                  created using React. The site is cross-browser compatible and 
                  fully responsive. It also allows users to browse movies by 
                  categories in multiple pages. Moreover, the site includes 
                  a short description and rating for every movie.
                </p>
                </div>
              </section>
            </section>
          </main>

          <section className="work-nav">
            <a href="/cheryl-guitars" aria-label="Previous Project"><span>&lsaquo;</span> GUITARS</a>
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

export default Movie;
