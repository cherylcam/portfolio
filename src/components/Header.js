import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

const mail = `<svg version="1.1" id="mail-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
.line1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
.line2{fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-linecap:round;stroke-miterlimit:10;}
</style>
<polyline class="line1" points="50,0 25,25 0,0 "/>
<line class="line2" x1="0" y1="50" x2="18.86" y2="18.86"/>
<line class="line2" x1="50" y1="50" x2="31.14" y2="18.86"/>
<path class="st1" d="M34.19-39.19"/>
</svg>`;

const github = `<svg version="1.1" id="github-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
.svg-fill{fill:#FFFFFF;}
</style>
<path class="svg-fill" d="M32.14,46.52h-0.2l-0.2-0.2v-1.22v-5.1c0-1.43-0.2-2.65-0.82-3.67c4.69-0.82,9.79-3.26,9.79-12.44
c0-2.45-0.82-4.69-2.24-6.53c0.41-1.22,0.61-3.47-0.41-6.32l-0.61-0.61c0,0-0.41-0.2-0.82-0.2c-1.22,0-3.06,0.41-6.12,2.45
c-1.63-0.2-3.47-0.61-5.51-0.61s-3.88,0.2-5.71,0.61c-2.86-1.84-4.9-2.24-6.12-2.24c-0.41,0-0.61,0.2-0.82,0.2
c-0.2,0-0.61,0.41-0.61,0.61c-1.02,2.86-0.82,5.1-0.41,6.32c-1.43,1.84-2.24,4.08-2.24,6.53c0,8.97,5.3,11.42,9.79,12.44
c-0.2,0.41-0.41,1.02-0.61,1.63c-0.41,0.2-1.02,0.41-1.84,0.41c-0.82,0-1.63-0.2-2.24-0.82l-0.2-0.2c-0.2-0.2-0.2-0.41-0.41-0.41
l-0.2-0.2l-0.2-0.2c0-0.2-1.63-2.65-4.49-2.86c-1.02,0-1.84,0.41-2.04,1.02c-0.41,1.02,0.82,1.84,1.43,2.24c0,0,1.22,0.61,2.04,2.86
c0.41,1.43,2.24,4.08,6.53,4.08h1.43v2.86l-0.2,0.2c0,0-0.2,0,0,0c-9.18-3.67-15.3-12.24-15.3-21.83C2.56,12.86,12.56,2.87,25,2.87
s22.44,9.99,22.44,22.44C47.44,34.89,41.32,43.46,32.14,46.52z"/>
</svg>`;

const linkedin = `<svg version="1.1" id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
.svg-fill{fill:#FFFFFF;}
</style>
<g>
<g>
   <path class="svg-fill" d="M14.14,9.7c0,1.69-1.26,3.13-3.4,3.13c-2.03,0-3.29-1.44-3.29-3.13c0-1.72,1.3-3.13,3.35-3.13
       C12.86,6.57,14.11,7.96,14.14,9.7z M7.82,38.5V16.1h5.92v22.4H7.82z"/>
   <path class="svg-fill" d="M20.38,22.88c0-2.61-0.07-4.85-0.18-6.78h5.18l0.29,3.6h0.14c0.97-1.72,3.57-4.16,7.75-4.16
       c3.96,0,8.71,2.39,8.71,10.1V38.5h-5.92V26.39c0-3.54-1.42-6.08-4.83-6.08c-2.6,0-4.31,1.81-4.96,3.52
       c-0.18,0.45-0.26,1.13-0.26,1.72V38.5h-5.92V22.88z"/>
</g>
</g>
</svg>`;

class Header extends Component{
    render(){
        return (
            <>
            <header>
                <div className="contact-wrap">
                    <a className="mail" 
                       href="mailto:hello@cherylcam.com?Subject=Hello%20"
                       target="_blank"
                       rel="noreferrer noopener"
                       aria-label="Contact Cheryl Cam via Email">
                        <InlineSVG src={mail}/>
                    </a>
                    <a className="github" 
                       href="https://github.com/cherylcam"
                       target="_blank"
                       rel="noreferrer noopener"
                       aria-label="Check out Cheryl Cam's Github">
                        <InlineSVG src={github}/>
                    </a>
                    <a className="linkedin" 
                       href="https://linkedin.com/in/cherylcam"
                       target="_blank"
                       rel="noreferrer noopener"
                       aria-label="Contact Cheryl Cam via LinkedIn">
                       <InlineSVG src={linkedin}/>
                    </a>
                </div>
                <div className="menu">
                <button id="hamburger" title="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </div>
            </header>
            </>
        )
    }
}

export default Header;