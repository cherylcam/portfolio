import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Hello extends Component {

    render() {
        return (
            <section className="scroll hello" data-section-name="hello">
                <div>
                    <Fade right duration={2000}>
                    <span className="greet">Hello!</span>
                    </Fade>
                    <Fade left duration={2000}>
                    <h1>I AM<br/>CHERYL<br/><span className="highline">CAM</span></h1>
                    </Fade>
                </div>
                <a className="anchor" href="#intro" aria-label="Click to red more about Cheryl Cam">
                    <span></span>
                </a>
            </section>
        )
    }
}