import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <section className="scroll contact" 
                     id="contact"
                     data-section-name="contact"
                     >
                <div className="contact-content">
                    <h2 className="contact-mobile">How Can You <span class="highline">Contact</span> Me?</h2>
                    <h2 className="contact-desktop">CONTACT ME</h2>
                    <p>I am always looking for new partners, clients and collaborators.</p>
                    <p>If you’d like to know more about me or my work, please do not hesitate to give me a shout!</p>
                    <div className="contact-methods">
                        <a className="email"
                           href="mailto:hello@cherylcam.com?Subject=Hello%20"
                           target="_blank"
                           rel="noreferrer noopener"
                           aria-label="Contact Cheryl Cam via Email">
                            <span>EMAIL</span>
                            <span>hello@cherylcam.com</span>
                        </a>
                        <a className="phone"
                           href="tel:604-338-4697"
                           target="_blank"
                           rel="noreferrer noopener"
                           aria-label="Contact Cheryl Cam via Phone">
                            <span>PHONE</span>
                            <span>(604) 338 4697</span>
                        </a>
                        <a className="linkedin"
                           href="https://linkedin.com/in/cherylcam"
                           target="_blank"
                           rel="noreferrer noopener"
                           aria-label="Contact Cheryl Cam via LinkedIn">
                            <span>LINKEDIN</span>
                            <span>@cherylcam</span>
                        </a>
                        <a className="github"
                           href="https://github.com/cherylcam"
                           target="_blank"
                           rel="noreferrer noopener"
                           aria-label="Check out Cheryl Cam's Github">
                            <span>GITHUB</span>
                            <span>@cherylcam</span>
                        </a>        
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;