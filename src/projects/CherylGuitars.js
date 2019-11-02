import React, { Component } from 'react';
import $ from "jquery";
import Logo                 from '../components/Logo';
import Footer               from '../components/Footer';
import BackToTop            from '../components/BackToTop';
import Codepen              from "react-codepen-embed";
import '../css/styles.css';

class Guitars extends Component{

  componentDidMount () {
    require("../scripts/fade-up.js");

    $('body').css({
      'overflow' : 'auto',
    });
  }

  render(){
    return (
        <div className="cheryl-guitars">
          <div className="master-wrap">
          <Logo/>
          <section className="project-opening">
            <div className="banner">
              <picture>
                  <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/banner.png"></source>
                  <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/banner-1000.png"></source>
                  <img data-src="./images/projects/cheryl-guitars/banner-800.png" alt="Cheryl Guitars Banner" src="./images/projects/cheryl-guitars/banner-800.png"></img>
              </picture>
            </div>
            <div className="scroll-down">
              <a href="#detail" aria-label="Scroll down to see more detail of this project">DETAIL</a>
            </div>
          </section>

          <main>
            <section className="detail-wrap" id="detail">
              <section className="short-intro" data-aos="fade-up">
                <h1><span className="highline">CHERYL</span> GUITARS</h1>
                <p>A fictional business brochure about a guitar manufacturer based in Vancouver, Canada.</p>
                <small></small>
                <small></small>
              </section>

              <section className="description-wrap" data-aos="fade-up">
                <div className="des-left">
                  <div className="tools">
                    <span>HTML5</span>
                    <span>Sass</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>Git</span>
                    <span>Illustrator</span>
                    <span>Photoshop</span>
                    <span>Invision</span>
                    <span>AdobeXD</span>
                  </div>

                  <div className="links">
                    <div className="visit-website">
                      <a href="https://cherylguitars.cherylcam.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Click to visit live website">
                        VITSIT WEBSITE
                      </a>
                    </div>

                    <div className="github-repo">
                      <a href="https://github.com/cherylcam/Business-Brochure-TWD"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Click to see this project's Github repo">
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="des-right">
                  <p>Cheryl Guitars is a 5-page business brochure website for a fictional 
                    business. Three team members, including <span className="highline">myself</span>, <a href="https://chanroyc.ca/">Roy Chan</a> & <a href="https://ysmatthew.com/">Matthew Yuen</a>, 
                    collaborated to develop a fully responsive website, all from scratch. 
                    The site is built with HTML, Sass, JavaScript, jQuery, Bootstrap, and 
                    version-controlled Git. It displays a custom logo that has the name of 
                    the business with the shape of a guitar, a neat and user-friendly layout, 
                    and beautiful guitar images to grab viewers' attention. Our team completed 
                    this project within a month. 
                  </p>
                </div>
              </section>

              <section className="work-process" data-aos="fade-up">
                <div>
                  <h2>WORK <span className="highline">PROCESS</span></h2>
                  <p>This project is developed based on the prototypes that I created 
                    using InVision and Photoshop for a design course in the BCIT TWD 
                    program. From there, we brainstormed and made some adjustments for 
                    the layout. We also created another mockup using InVision. This mockup 
                    included extra content such as banners for each page, additional info 
                    section on the home page, the pop-up modal window on both Electric and 
                    Acoustic pages, introductions for each Cheryl Guitars' board members, 
                    and an added footer on the bottom.
                  </p>
                </div>
                
                <div className="wireframes" data-aos="fade-up">
                  <h3>WIREFRAMES</h3>
                  <h4>Originals</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/original-invision.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/original-invision-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/original-invision-800.jpg"></source>
                      <img data-src="./images/projects/cheryl-guitars/original-invision-500.jpg" alt="Cheryl Guitars InVision Wireframe" src="./images/projects/cheryl-guitars/original-invision-500.jpg"></img>
                    </picture>
                  </div>

                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/original-pts.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/original-pts-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/original-pts-800.jpg"></source>
                      <img data-src="./images/projects/cheryl-guitars/original-pts-500.jpg" alt="Cheryl Guitars Photoshop Prototype" src="./images/projects/cheryl-guitars/original-pts-500.jpg"></img>
                    </picture>
                  </div>

                  <h4>Revised</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/revised-wireframe.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/revised-wireframe-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/revised-wireframe-800.jpg"></source>
                      <img data-src="./images/projects/cheryl-guitars/revised-wireframe-500.jpg" alt="Cheryl Guitars revised Wireframe" src="./images/projects/cheryl-guitars/revised-wireframe-500.jpg"></img>
                    </picture>
                  </div>
                </div>

                <div className="design" data-aos="fade-up">
                  <h3>DESIGN</h3>
                    <p> Our team decided to use the existed logo as it could create an 
                      excellent first impression of the website. Viewers can quickly 
                      identify what the site is representing. After searching and failing
                      to find the perfect visual aids, we decided to take the photos 
                      ourselves. Fortunately, 
                      <a href="https://www.tomleemusic.ca/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Click to see Tom Lee Music's website"> Tom Lee Music </a>  
                      approved our request, 
                      and our group was able to select guitar images that best suit 
                      the website.</p>

                  <h4>Mobile</h4>
                  <div className="design-mobile">
                    <div className="img-wrap">
                      <h5>Electric Page</h5>
                      <picture>
                          <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/mobile-electric-350.jpg"></source>
                          <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/mobile-electric-230.jpg"></source>
                          <source media="(min-width: 380px)" srcSet="./images/projects/cheryl-guitars/mobile-electric-290.jpg"></source>
                          <img data-src="./images/projects/cheryl-guitars/mobile-electric-230.jpg" alt="Cheryl Guitars Mobile Design Electric Page" src="./images/projects/cheryl-guitars/mobile-electric-230.jpg"></img>
                      </picture>
                    </div>
                    <div className="img-wrap">
                      <h5>Menu</h5>
                      <picture>
                          <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/mobile-menu-350.jpg"></source>
                          <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/mobile-menu-230.jpg"></source>
                          <source media="(min-width: 380px)" srcSet="./images/projects/cheryl-guitars/mobile-menu-290.jpg"></source>
                          <img data-src="./images/projects/cheryl-guitars/mobile-menu-230.jpg" alt="Cheryl Guitars Mobile Design Menu" src="./images/projects/cheryl-guitars/mobile-menu-230.jpg"></img>
                      </picture>
                    </div>
                    <div className="img-wrap">
                      <h5>Acoustic Page</h5>
                      <picture>
                          <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/mobile-acoustic-350.jpg"></source>
                          <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/mobile-acoustic-230.jpg"></source>
                          <source media="(min-width: 380px)" srcSet="./images/projects/cheryl-guitars/mobile-acoustic-290.jpg"></source>
                          <img data-src="./images/projects/cheryl-guitars/mobile-acoustic-230.jpg" alt="Cheryl Guitars Mobile Acoustic Page" src="./images/projects/cheryl-guitars/mobile-acoustic-230.jpg"></img>
                      </picture>
                    </div>
                  </div>
                  
                  <h4>Desktop</h4>
                  <div className="design-desktop">
                    <div className="img-wrap">
                      <h5>Locate A Dealer Page</h5>
                      <picture>
                        <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/desktop-locate-a-dealer.jpg"></source>
                        <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/desktop-locate-a-dealer-1000.jpg"></source>
                        <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/desktop-locate-a-dealer-800.jpg"></source>
                        <img data-src="./images/projects/cheryl-guitars/desktop-locate-a-dealer-500.jpg" alt="Cheryl Guitars on desktop Locate a Dealer" src="./images/projects/cheryl-guitars/desktop-locate-a-dealer-500.jpg"></img>
                      </picture>
                    </div>
                    <div className="img-wrap">
                      <h5>Module Popup Window</h5>
                      <picture>
                        <source media="(min-width: 900px)" srcSet="./images/projects/cheryl-guitars/desktop-module.jpg"></source>
                        <source media="(min-width: 700px)" srcSet="./images/projects/cheryl-guitars/desktop-module-1000.jpg"></source>
                        <source media="(min-width: 500px)" srcSet="./images/projects/cheryl-guitars/desktop-module-800.jpg"></source>
                        <img data-src="./images/projects/cheryl-guitars/desktop-module-500.jpg" alt="Cheryl Guitars Mobile Design Electric Page" src="./images/projects/cheryl-guitars/desktop-module-500.jpg"></img>
                      </picture>
                    </div>
                  </div>
                </div>

                <div className="colour-scheme" data-aos="fade-up">
                  <h3>COLOUR SCHEME</h3>
                  <div className="colour-list">
                    <div className="colour one">
                      <div className="colour-container">
                      <span>#FFFFFF</span>
                      </div>
                    </div>
                    <div className="colour two">
                      <div className="colour-container">
                      <span>#660000</span>
                      </div>
                    </div>
                    <div className="colour three">
                      <div className="colour-container">
                      <span>#000000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="code" data-aos="fade-up">
                  <h3>CODE</h3>
                  <Codepen hash="mddVdpy" 
                          user="cherylcam" 
                          preview="false"
                          loader={() => <div>Codepen is loading...</div>}
                  />
                </div>
              </section> 
            </section>
          </main>

          <section className="work-nav">
            <a href="/portfolio" aria-label="Previous Project"><span>&lsaquo;</span> PORTFOLIO</a>
            <a href="/work" aria-label="Back to Work Page">- BACK -</a>
            <a href="/movie" aria-label="Next Project">MAZZY <span>&rsaquo;</span></a>
          </section>

          </div>
          <BackToTop/>
          <Footer/>
        </div>
    );
  };
}

export default Guitars;
