import React, { Component } from 'react';
import Contact         from '../components/Contact';

export default class Intro extends Component {
    render() {
        return (
            <section className="scroll intro" 
                     id="intro"
                     data-section-name="intro">
                <div className="biography">
                    <div className="brief-intro">
                        <p className="xinchao"><b>Xin chào<span className="highline">!</span></b></p>
                        <span className="pronounce">(Pronounce: Sin chow)</span>
                        <p>My name is Cheryl <span className="highline">Cam</span>, a <b>Front-End Web Developer</b> and <b>Web Designer</b> based in Vancouver, BC, Canada.</p>
                        <p><b><span className="highline">"Cam"</span></b> means <b className="highline">'orange'</b> in Vietnamese. Interesting, right? 
                            If you ever wondered why I choose orange as one of my theme colours, then that's the reason!
                        </p>
                    </div>
                    <div className="long-intro">
                        <p>Growing up, I've always wanted to do something technical yet creative. Web development has always been one of my most significant interests. However, when it came time to choose a career path, I took Accounting as my major in college because I quite enjoy working with numbers. Oddly enough, after finishing the program, I was offered a job as a Settlement Worker for an Immigration and Settlement office. Through that opportunity, I was able to assist and support newcomers through their transition to a new life in Canada. This role was significant to me since helping other people is what I love to do.</p>
                        <p>Nevertheless, I felt like something was missing. I started learning how to code by watching online modules in my spare time. Then I realized that my love for web development and design never vanished. I had never felt this fulfilled before. My journey of finding that missing puzzle piece finally came to an end, but my journey to become a Web Developer had just begun.</p>
                        <p>I am well versed in user-centred design methods and techniques, with a deep understanding of typography, colour, photography. An eye for detail and with best coding practices to craft award-worthy, pixel-perfect digital products. I am not shy about taking ownership of my work and enjoy working in a team-oriented environment. My main fields of interest within web development tools include custom CMS theming and JavaScript frameworks such as React. I'm always willing to learn new traits because I believe that knowledge is an invaluable asset.</p>
                    </div>
                </div>
                <div className="links"
                     aria-label="Click to see Cheryl Cam's work list">
                    <a href="/work">
                         SEE MY WORK 
                    </a>
                </div>
                <div className="tools-contact-wrap">
                    <div className="tools-kit">
                        <h2>KNOWLEDGE</h2>
                        <div className="development-tools">
                            <h3>DEVELOPMENT</h3>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Sass</span>
                            <span>JavaScript</span>
                            <span>jQuery</span>
                            <span>PHP</span>
                            <span>React</span>
                            <span>Git</span>
                            <span>Gulp</span>
                        </div>
                        <div className="design-tools">
                            <h3>DESIGN</h3>
                            <span>Photoshop</span>
                            <span>Illustration</span>
                            <span>Adobe XD</span>
                            <span>InVision</span>
                            <span>Balsamiq</span>
                        </div>
                        <div className="cms">
                            <h3>CMS</h3>
                            <span>WordPress</span>
                            <span>Shopify</span>
                            <span>WooCommerce</span>
                        </div>                    
                    </div>
                    <Contact/>
                </div>
            </section>
        )
    }
}