import React, { Component } from 'react';
import $ from "jquery";
import {FontAwesomeIcon}    from '@fortawesome/react-fontawesome';
import { faChevronUp }      from '@fortawesome/free-solid-svg-icons'

export default class BackToTop extends Component {
    componentDidMount () {
        // Back to top button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('.backtop').fadeIn();
            } else {
                $('.backtop').fadeOut();
            }
        });
        $('.backtop').click(function(){
            $('html, body').animate({
                scrollTop : 0},500, 
                function(){
            });
            return false;
        });
    }

    render() {
        return (
            <a href="#0" className="backtop" aria-label="Click to scroll to the top">
                <FontAwesomeIcon icon={faChevronUp} size="2x"/>
                <span>top</span>
            </a>
        )
    }
}
        