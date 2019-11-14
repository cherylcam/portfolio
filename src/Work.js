import React, { Component } from 'react';
import Logo            from './components/Logo';
import Footer          from './components/Footer';
import BackToTop       from './components/BackToTop';
import Flip            from 'react-reveal/Flip';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery";

class Work extends Component{

  componentDidMount () {

    $('body').css({
      'overflow' : 'auto',
    });

    AOS.init({
      offset: 300,
      duration: 1500,
      easing: 'ease-in-out-quad',
      delay: 100,
      anchorPlacement: 'top-bottom',
    })

    //Keep scrolling
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200 
          && $(this).scrollTop() < 850 
          && window.innerWidth < 700) {
        $('.keep-scroll').fadeIn();
      } else {
        $('.keep-scroll').fadeOut();
      }
    });
  }

  render(){
    return (
    <div className="work">
      <Logo/>
      <main>
        <div className="page-intro">
          <div className="work-intro-wrap">
            <Flip left cascade duration={2000}>
            <span className="greet">Work!</span>
            </Flip>
            <Flip left cascade duration={2000}>
              <h1>MY<br/><span className="highline">WORK</span></h1>
            </Flip>
            <p>Please click on the project to see detail</p>
          </div>
          <a className="anchor" href="#projects" aria-label="Scroll down to see more projects">
              <span></span>
          </a>
        </div>
        <div className="project-wrap" 
             id="projects">
          <span className="keep-scroll">Keep Scrolling</span>
          <section className="project OAT" data-aos="fade-right">
            <div className="image-anchor-wrap">
              <a href="/oat" aria-label="Click to see detail">
                <figure>
                  <picture>
                    <source media="(min-width: 1000px)" srcSet="/images/projects/OAT/banner-1000.png"></source>
                    <source media="(min-width: 860px)" srcSet="/images/projects/OAT/banner-700.png"></source>
                    <source media="(min-width: 700px)" srcSet="/images/projects/OAT/banner-1000.png"></source>
                    <source media="(min-width: 600px)" srcSet="/images/projects/OAT/banner-900.png"></source>
                    <source media="(min-width: 400px)" srcSet="/images/projects/OAT/banner-700.png"></source>
                    <img data-src="/images/projects/OAT/banner-500.png " alt="OAT BCIT Program Client Project | Cheryl Cam Portfolio" src="/images/projects/OAT/banner-500.png"></img>
                  </picture>
                  <span className="view-detail">View Detail</span>
                </figure>
              </a>
            </div>
            <div className="project-content">
              <div className="project-intro">
                <h3>BCIT OAT</h3>
              </div>
              <a href="http://bcitoat.bcitwebdeveloper.ca/"
                 target="_blank"
                 rel="noreferrer noopener"
                 aria-label="Click to view live website">
                <b>View Live</b>
              </a>
            </div> 
            <p>A client website</p>        
          </section>
          <section className="project cheryl-cam-portfolio" data-aos="fade-left">
            <div className="image-anchor-wrap">
              <a href="/portfolio" aria-label="Click to see detail">
                <figure>
                  <picture>
                    <source media="(min-width: 1000px)" srcSet="/images/projects/portfolio/banner-1000.png"></source>
                    <source media="(min-width: 860px)" srcSet="/images/projects/portfolio/banner-700.png"></source>
                    <source media="(min-width: 700px)" srcSet="/images/projects/portfolio/banner-1000.png"></source>
                    <source media="(min-width: 600px)" srcSet="/images/projects/portfolio/banner-900.png"></source>
                    <source media="(min-width: 400px)" srcSet="/images/projects/portfolio/banner-700.png"></source>
                    <img data-src="/images/projects/portfolio/banner-500.png " alt="Cheryl Cam Portfolio" src="/images/projects/portfolio/banner-500.png"></img>
                  </picture>
                  <span className="view-detail">View Detail</span>
                </figure>
              </a>
            </div>
            <div className="project-content">
              <div className="project-intro">
                <h3>PORTFOLIO</h3>
              </div>
              <a href="/"
                 target="_blank"
                 rel="noreferrer noopener"
                 aria-label="Click to view live website">
                <b>View Live</b>
              </a>
            </div> 
            <p>Cheryl Cam's personal porfolio</p>
          </section>
          <section className="project cheryl-guitars-bb" data-aos="fade-right">
            <div className="image-anchor-wrap">
              <a href="/cheryl-guitars" aria-label="Click to see detail">
                <figure>
                  <picture>
                    <source media="(min-width: 1000px)" srcSet="/images/projects/cheryl-guitars/banner-1000.png"></source>
                    <source media="(min-width: 860px)" srcSet="/images/projects/cheryl-guitars/banner-700.png"></source>
                    <source media="(min-width: 700px)" srcSet="/images/projects/cheryl-guitars/banner-1000.png"></source>
                    <source media="(min-width: 600px)" srcSet="/images/projects/cheryl-guitars/banner-900.png"></source>
                    <source media="(min-width: 400px)" srcSet="/images/projects/cheryl-guitars/banner-700.png"></source>
                    <img data-src="/images/projects/cheryl-guitars/banner-500.png " alt=" Cheryl Guitars | Cheryl Cam Portfolio" src="/images/projects/cheryl-guitars/banner-500.png"></img>
                  </picture>
                  <span className="view-detail">View Detail</span>
                </figure>
              </a>
            </div>
            <div className="project-content">
              <div className="project-intro">
                <h3>CHERYL GUITARS</h3>
              </div>             
                <a href="https://cherylguitars.cherylcam.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Click to view live website">
                  <b>View Live</b>
                </a>
            </div> 
            <p>A fictional business brochure</p>
          </section>
          <section className="project movie" data-aos="fade-left">
            <div className="image-anchor-wrap">
              <a href="/movie" aria-label="Click to see detail">
                <figure>
                  <picture>
                    <source media="(min-width: 1000px)" srcSet="/images/projects/react-movie/banner-1000.png"></source>
                    <source media="(min-width: 860px)" srcSet="/images/projects/react-movie/banner-700.png"></source>
                    <source media="(min-width: 700px)" srcSet="/images/projects/react-movie/banner-1000.png"></source>
                    <source media="(min-width: 600px)" srcSet="/images/projects/react-movie/banner-900.png"></source>
                    <source media="(min-width: 400px)" srcSet="/images/projects/react-movie/banner-700.png"></source>
                    <img data-src="/images/projects/react-movie/banner-500.png " alt="React Mazzy Movie | Cheryl Cam Portfolio" src="/images/projects/react-movie/banner-500.png"></img>
                  </picture>
                  <span className="view-detail">View Detail</span>
                </figure>
              </a>
            </div>
            <div className="project-content">
              <div className="project-intro">
                <h3>MAZZY MOVIE</h3>
              </div>
              <a href="https://mazzymovie.cherylcam.com/"
                 target="_blank"
                 rel="noreferrer noopener"
                 aria-label="Click to view live website">
                <b>View Live</b>
              </a>
            </div> 
            <p>React Movie API</p>
          </section>
          <section className="project news" data-aos="fade-left">
            <div className="image-anchor-wrap">
              <a href="/news" aria-label="Click to see detail">
                <figure>
                  <picture>
                    <source media="(min-width: 1000px)" srcSet="/images/projects/react-news/banner-1000.png"></source>
                    <source media="(min-width: 860px)" srcSet="/images/projects/react-news/banner-700.png"></source>
                    <source media="(min-width: 700px)" srcSet="/images/projects/react-news/banner-1000.png"></source>
                    <source media="(min-width: 600px)" srcSet="/images/projects/react-news/banner-900.png"></source>
                    <source media="(min-width: 400px)" srcSet="/images/projects/react-news/banner-700.png"></source>
                    <img data-src="/images/projects/react-news/banner-500.png " alt="React Mazzy News | Cheryl Cam Portfolio" src="/images/projects/react-news/banner-500.png"></img>
                  </picture>
                  <span className="view-detail">View Detail</span>
                </figure>
              </a>
            </div>
            <div className="project-content">
              <div className="project-intro">
                <h3>CTC NEWS</h3>
              </div>
              <a href="https://ctcnews.cherylcam.com/"
                 target="_blank"
                 rel="noreferrer noopener"
                 aria-label="Click to view live website">
                <b>View Live</b>
              </a>
            </div> 
            <p>React News API</p>
          </section>
        </div>
      </main> 
      <BackToTop/>
      <Footer/>
    </div>
    );
  };
}

export default Work;
