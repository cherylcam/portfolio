import React, { Component } from 'react';
import '../css/styles.css';
import $ from "jquery";
import Logo                 from '../components/Logo';
import Footer               from '../components/Footer';
import BackToTop            from '../components/BackToTop';
import Gist                 from 'react-gist';
import {FontAwesomeIcon}    from '@fortawesome/react-fontawesome';
import {faChevronDown}      from '@fortawesome/free-solid-svg-icons';

class OAT extends Component{

  componentDidMount () {
    require("../scripts/fade-up.js");

    $('body').css({
      'overflow' : 'auto',
    });

    $('.view-code').click(function(){
      $(this).find('.svg-inline--fa.fa-w-14').toggleClass('active')
      $(this).next().slideToggle();
    })
  }

  render(){
    return (
        <div className="oat">
          <div className="master-wrap">
          <Logo/>
          <section className="project-opening">
            <div className="banner">
              <picture>
                  <source media="(min-width: 900px)" srcSet="./images/projects/OAT/banner.png"></source>
                  <source media="(min-width: 700px)" srcSet="./images/projects/OAT/banner-1000.png"></source>
                  <img data-src="./images/projects/OAT/banner-800.png" alt="Cheryl Guitars Banner" src="./images/projects/OAT/banner-800.png"></img>
              </picture>
            </div>
            <div className="scroll-down">
              <a href="#detail" aria-label="Scroll down to see more detail of this project">DETAIL</a>
            </div>
          </section>

          <main>
            <section className="detail-wrap" id="detail">
              <section className="short-intro" data-aos="fade-up">
                <h1><span className="highline">BCIT</span> OAT</h1>
                <p>A client website created for BCIT Office Administrator with Technology Program.</p>
                <small></small>
                <small></small>
              </section>

              <section className="description-wrap" data-aos="fade-up">
                <div className="des-left">
                  <div className="tools">
                    <span>WordPress</span>
                    <span>Sass</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>PHP</span>
                    <span>Git</span>
                    <span>Invision</span>
                    <span>AdobeXD</span>
                  </div>

                  <div className="team">
                    <span>COLLABORATORS:</span>
                    <a href="https://cherylcam.com/" aria-label="Cheryl Cam's Portfolio">
                      Cheryl Cam</a>
                    <a href="https://chanroyc.ca/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Roy's Portfolio">
                      Roy Chan</a>
                    <a href="https://mariusgessler.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Marius Portfolio">
                      Marius Gessler</a>
                    <a href="https://ysmatthew.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Matthew's Portfolio">
                      Matthew Yuen</a>
                  </div>

                  <div className="links">
                    <div className="visit-website">
                      <a href="https://bcitoat.bcitwebdeveloper.ca"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Click to see live website">
                        VITSIT WEBSITE </a>
                    </div>

                    <div className="github-repo">
                      <a href="https://github.com/cherylcam/bcit-oat"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Click to see this project's github repo">
                          GITHUB </a>
                    </div>
                  </div>
                </div>
                
                <div className="des-right">
                  <p>The Office Administrator with Technology is a hands-on program 
                    designed by British Columbia Institute of Technology. For this 
                    project, my team redesigned and restructured an existing static 
                    website to a dynamic site using WordPress. This website is 
                    built using Wordpress' Underscores starter theme, and other 
                    collaboration tools such as Git, Gulp and Sass. The primary purpose 
                    of the website is to provide the program's schedule for the current students. 
                    It also showcases information about the program for potential students.
                  </p>
                </div>
              </section>

              <section className="work-process">
                <div data-aos="fade-up">
                  <h2>WORK <span className="highline">PROCESS</span></h2>
                  <p>This entire project includes constant communication with the 
                    client, the OAT program coordinator, to identify needs and requirements, as well as coordination 
                    with the other three project members to create the best solutions 
                    and innovative designs.
                  </p>
                  <p>According to the client, the site must include these functional requirements: 
                    can upload a schedule in .csv (comma separated values) format, 
                    easily update course schedule and display job postings of office administrator 
                    positions from external sources.
                  </p>
                </div>
                
                <div className="ia" data-aos="fade-up">
                  <h3>INFORMATION ARCHITECTURE</h3>
                  <p>After finalizing the first meeting with the client, we decided 
                    to continue using the hierarchical scheme information architecture 
                    as the existing OAT website. But rearrange the structure since some 
                    pages have more importance than others. We placed the "Courses" page 
                    into the main navigation and replaced it with the "Careers" page as 
                    a sublevel of "Resources." Likewise,  we moved the "Benefits" page 
                    into the footer. You may also notice that we have begun planning 
                    which WordPress page-template to use during the development to 
                    augment our vision before we start to code. 
                  </p>
                  <h4>Original</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/OAT/ia-original.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/OAT/ia-original-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/OAT/ia-original-800.jpg"></source>
                      <img data-src="./images/projects/OAT/ia-original-500.jpg" alt="BCIT OAT Information Architecture Revised" src="./images/projects/OAT/ia-original-500.jpg"></img>
                    </picture>
                  </div>
                  <h4>Revised</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/OAT/oat-ia.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/OAT/oat-ia-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/OAT/oat-ia-800.jpg"></source>
                      <img data-src="./images/projects/OAT/oat-ia-500.jpg" alt="BCIT OAT Information Architecture Original" src="./images/projects/OAT/oat-ia-500.jpg"></img>
                    </picture>
                  </div>
                </div>

                <div className="wireframes" data-aos="fade-up">
                  <h3>WIREFRAMES</h3>
                  <p>
                  Initially, my team and I made sketches on InVision collaboratively 
                  for both mobile and desktop versions, we then transfer them to Adobe XD 
                  so we could present each wireframe to the client. Our team also added 
                  some colours for the desktop version to help the client have a better 
                  visual of how the new website might look.
                  </p>
                  <h4>InVision</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/OAT/invision.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/OAT/invision-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/OAT/invision-800.jpg"></source>
                      <img data-src="./images/projects/OAT/invision-500.jpg" alt="BCIT OAT InVision Wireframe" src="./images/projects/OAT/invision-500.jpg"></img>
                    </picture>
                  </div>

                  <h4>Adobe XD - Mobile</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/OAT/mobile-wireframe.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/OAT/mobile-wireframe-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/OAT/mobile-wireframe-800.jpg"></source>
                      <img data-src="./images/projects/OAT/mobile-wireframe-500.jpg" alt="BCIT OAT Mobile Wireframe" src="./images/projects/OAT/mobile-wireframe-500.jpg"></img>
                    </picture>
                  </div>

                  <h4>Adobe XD - Desktop</h4>
                  <div className="img-wrap">
                    <picture>
                      <source media="(min-width: 900px)" srcSet="./images/projects/OAT/desktop-wireframe.jpg"></source>
                      <source media="(min-width: 700px)" srcSet="./images/projects/OAT/desktop-wireframe-1000.jpg"></source>
                      <source media="(min-width: 500px)" srcSet="./images/projects/OAT/desktop-wireframe-800.jpg"></source>
                      <img data-src="./images/projects/OAT/desktop-wireframe-500.jpg" alt="BCIT OAT Desktop Wireframe" src="./images/projects/OAT/desktop-wireframe-500.jpg"></img>
                    </picture>
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
                      <span>#4285F4</span>
                      </div>
                    </div>
                    <div className="colour three">
                      <div className="colour-container">
                      <span>#21437A</span>
                      </div>
                    </div>
                    <div className="colour four">
                      <div className="colour-container">
                      <span>#606060</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="code" data-aos="fade-up">
                  <h3>CODE</h3>
                  <p>Our team decided to use the <a href="https://en-ca.wordpress.org/plugins/tablepress/" target="_blank" rel="noopener noreferrer" aria-label="TablePress plugin">TablePress</a> plugin for the 
                    schedule, which allows the user to import .csv file and 
                    output data in a preformatted table, and no coding is required. 
                    However, we decided to customize the table for better user 
                    experience and design.
                  </p>
                  <h4>Schedule - Calendar</h4>
                    <div className="accordian">
                      <span className="view-code">Click To Expand Code Snippet <FontAwesomeIcon icon={faChevronDown} color="#F28B0E" /></span>
                      <div className="code-snippet">
                        <Gist id='6f289d5f4e83891838cb48e78019c4d3' />
                      </div>
                    </div>
                  <h4>Schedule - List </h4>
                    <div className="accordian">
                      <span className="view-code list">Click To Expand Code Snippet <FontAwesomeIcon icon={faChevronDown} color="#F28B0E"/></span>
                      <div className="code-snippet list">
                        <Gist id='b6ea69d7cbcae75fd611cb92f6bc88d7' />
                      </div>
                    </div>
                </div>
              </section> 
            </section>
          </main>

          <section className="work-nav">
            <a href="#0" aria-label="Previous project"><span>&lsaquo;</span> COMING SOOM</a>
            <a href="/work" aria-label="Back to Work Page">- BACK -</a>
            <a href="/portfolio" aria-label="Next Project">PORTFOLIO	<span>&rsaquo;</span></a>
          </section>

          </div>
          <BackToTop/>
          <Footer/>
        </div>
    );
  };
}

export default OAT;
