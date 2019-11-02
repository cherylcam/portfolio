import React, { Component } from 'react';
import {FontAwesomeIcon}    from '@fortawesome/react-fontawesome';
import {faEnvelope}      from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub}      from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-wrap">
                    <span className="line light"></span>
                    <span className="cheryl">&copy; Cheryl Cam</span>
                    <div className="footer-contact">
                    <a className="email"
                        href="mailto:hello@cherylcam.com?Subject=Hello%20"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Contact Cheryl Cam via Email">
                            <span>Email</span>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <a className="linkedin"
                        href="https://linkedin.com/in/cherylcam"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Contact Cheryl Cam via LinkedIn">
                            <span>LinkedIn</span>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                        <a className="github"
                        href="https://github.com/cherylcam"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Check out Cheryl Cam's Github">
                            <span>Github</span>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    </div>
            </footer>
        )
    }
}