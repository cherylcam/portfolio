import React, { Component } from 'react';
import $ from "jquery";
import Logo                 from '../components/Logo';
import Footer               from '../components/Footer';
import BackToTop            from '../components/BackToTop';
import '../css/styles.css';

class Portfolio extends Component{

  componentDidMount () {
    require("../scripts/fade-up.js");

    $('body').css({
      'overflow' : 'auto',
    });
  }

  render(){
    return (
        <div className="portfolio">
          <div className="master-wrap">
          <Logo/>
          <section className="project-opening">
            <div className="banner">
            <picture>
                <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/banner.png"></source>
                <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/banner-1000.png"></source>
                <img data-src="./images/projects/portfolio/banner-800.png" alt="Cheryl Cam Portfolio Banner" src="./images/projects/portfolio/banner-800.png"></img>
            </picture>
            </div>
            <div className="scroll-down">
              <a href="#detail" aria-label="Scroll down to see more detail of this project">DETAIL</a>
            </div>
          </section>

          <main>
            <section className="detail-wrap" id="detail">
              <section className="short-intro" data-aos="fade-up">
                <h1><span className="highline">PERSONAL</span> PORTFOLIO</h1>
                <p>You are looking right at it!!</p>
                <small></small>
                <small></small>
              </section>

              <section className="description-wrap" data-aos="fade-up">
                <div className="des-left">
                  <div className="tools">
                    <span>React</span>
                    <span>Sass</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>Git</span>
                    <span>Invision</span>
                    <span>AdobeXD</span>
                  </div>

                  <div className="github-repo">
                    <a href="https://github.com/cherylcam/portfolio"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Click to see this project's Gihub repo">
                        GITHUB </a>
                  </div>
                </div>
                
                <div className="des-right">
                <p>Welcome to my portfolio website! The primary purpose of this portfolio 
                    is to showcase my work and my love for web development and design. 
                    People can get to know a bit <a href="/about" aria-label="Click to know more about Cheryl Cam">about me</a> and the planning process for 
                    every project.<br/>
                    This never-ending-project is developed using React, a robust JavaScript framework 
                    that I did not have a lot of experience working with it. But I wanted 
                    to challenge myself on this project and to implement various 
                    features for my users to enjoy.
                </p>
                </div>
              </section>

              <section className="work-process">
                <div data-aos="fade-up">
                  <h2>WORK <span className="highline">PROCESS</span></h2>
                  <p>The work process started with brainstorming the information 
                      architecture of the site and which projects should be included. 
                      Next, the layouts and designs were sketched. I also had to 
                      determine which features would be implemented.
                  </p>
                </div>
                
                <div className="ia" data-aos="fade-up">
                  <h3>INFORMATION ARCHITECTURE</h3>
                  <p>In the end, I chose to use a flat hierarchy. The users would 
                      first land on the home page then navigate to other pages. 
                      The work page would be the first one since my projects are the 
                      primary focus of this website. Followed by the work page are the 
                      about page and contact page because I'd love the users to get 
                      to know me, the creator of this baby!
                  </p>
                  <div className="img-wrap">
                      <picture>
                        <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/ia.jpg"></source>
                        <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/ia-1000.jpg"></source>
                        <source media="(min-width: 500px)" srcSet="./images/projects/portfolio/ia-800.jpg"></source>
                        <img data-src="./images/projects/portfolio/ia-500.jpg" alt="Cheryl Cam Portfolio Information Architecture Original" src="./images/projects/portfolio/ia-500.jpg"></img>
                      </picture>
                  </div>
                </div>

                <div className="wireframes" data-aos="fade-up">
                  <h3>WIREFRAMES</h3>
                  <p>
                  I designed wireframes for both mobile and desktop using Adobe XD, 
                  since it is one of my favourite wireframing tools.
                  While sketching these wireframes, I choose to include brief 
                  descriptions of what content and I would like to write, such 
                  as for the headings and short paragraphs because I want to have a 
                  clearer picture of what the design might look like. Likewise, the 
                  hover and active state for the contact icons were also created, as 
                  you can see on the home page.
                  </p>
                  <h4>Mobile</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/mobile-wireframe.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/mobile-wireframe-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/portfolio/mobile-wireframe-800.jpg"></source>
                      <img data-src="./images/projects/portfolio/mobile-wireframe-500.jpg" alt="Cheryl Cam Portfolio Mobile Wireframe" src="./images/projects/portfolio/mobile-wireframe-500.jpg"></img>
                    </picture>
                  </div>

                  <h4>Desktop</h4>
                  <h5>Home Page</h5>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/desktop-home.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/desktop-home-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/portfolio/desktop-home-800.jpg"></source>
                      <img data-src="./images/projects/portfolio/desktop-home-500.jpg" alt="Cheryl Cam Portfolio Desktop Wireframe Home Page" src="./images/projects/portfolio/desktop-home-500.jpg"></img>
                    </picture>
                  </div>
                  <h5>About Page</h5>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/desktop-about.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/desktop-about-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/portfolio/desktop-about-800.jpg"></source>
                      <img data-src="./images/projects/portfolio/desktop-about-500.jpg" alt="Cheryl Cam Portfolio Desktop Wireframe About Page" src="./images/projects/portfolio/desktop-about-500.jpg"></img>
                    </picture>
                  </div>
                  <h5>Contact Page</h5>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/portfolio/desktop-contact.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/portfolio/desktop-contact-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/portfolio/desktop-contact-800.jpg"></source>
                      <img data-src="./images/projects/portfolio/desktop-contact-500.jpg" alt="Cheryl Cam Portfolio Desktop Wireframe Contact Page" src="./images/projects/portfolio/desktop-contact-500.jpg"></img>
                    </picture>
                  </div>
                </div>

                <div className="design" data-aos="fade-up">
                  <h3>DESIGN</h3>
                  <p>This portfolio is designed to have a simple yet appealing and 
                    clear layout to showcase various styles of other projects. In 
                    the end, I made some adjustments that are different from the 
                    existing wireframes. First of all, instead of having a separate 
                    contact page, I included it on the about page since it does 
                    not have a lot of content. Secondly, I changed the heading of 
                    the about page to be full-page, because I wrote so much more 
                    "about me" than I expected!
                  </p>
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
                      <span>#FDFAF1</span>
                      </div>
                    </div>
                    <div className="colour three">
                      <div className="colour-container">
                      <span>#F28B0E</span>
                      </div>
                    </div>
                    <div className="colour four">
                      <div className="colour-container">
                      <span>#262626</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="function" data-aos="fade-up">
                  <h3>FUNCTIONALITY</h3>
                  <h4>Playful Home Page</h4>
                  <div className="home-gif">
                    <img src="./images/projects/portfolio/homepage.gif" alt="Playful Cheryl Cam's Portolio Home Page"></img>        
                  </div>
                </div>

              </section> 
            </section>
          </main>

          <section className="work-nav">
            <a href="/oat" aria-label="Previous project"><span>&lsaquo;</span> BCIT OAT</a>
            <a href="/work" aria-label="Back to Work Page">- BACK -</a>
            <a href="/cheryl-guitars" aria-label="Next project">GUITARS	<span>&rsaquo;</span></a>
          </section>

          </div>
          <BackToTop/>
          <Footer/>
        </div>
    );
  };
}

export default Portfolio;
