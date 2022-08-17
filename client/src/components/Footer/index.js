import React from "react";

function Footer(){
    return(
        <div>
            <nav class="uk-navbar uk-navbar-container" uk-navbar=''>
                <div class="uk-navbar-left">
                    <img id='MobileLogo' src="./assets/images/JO_Logo_Stamp.png" />
                </div>
                <div class="uk-navbar-center">
                    <a href="mailto:Jason@Offenbaker.com" id="EmailMe" className="uk-link-reset">Contact Me!</a>
                </div>
                <div class="uk-navbar-right uk-margin-right">
                    Jason Offenbaker © 2022
                </div>
            </nav>
        </div>
    )
}

export default Footer;