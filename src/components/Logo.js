import React, { Component } from 'react';

export default class Logo extends Component {

    render() {
        return (
            <div className="logo-wrap">
                <a href="/"
                   id="dark-logo"
                   aria-label="Cheryl Cam Portfolio's Logo Dark">
                    <img src='/portfolio-logo-dark.svg' alt='Cheryl Cam Portfolio Logo Dark'></img>
                </a> 
                <a href="/"
                   id="light-logo"
                   aria-label="Cheryl Cam Portfolio's Logo">
                    <img src='/portfolio-logo.svg' alt='Cheryl Cam Portfolio Logo White'></img>
                </a>      
            </div>
        )
    }
}