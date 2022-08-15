import React from "react";

function HeaderMobile() {
    return (
        <div uk-sticky="position: top">
            <nav class="uk-navbar uk-navbar-container" uk-navbar=''>
                <div class="uk-navbar-center ">
                    <img id='MobileLogo' src="./assets/images/JO_Logo_Stamp.png" />
                </div>
                <div class="uk-navbar-right">
                    <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon="" href="#"></a>
                    <div class="uk-navbar-dropdown" uk-dropdown="boundary: !.uk-navbar; stretch: x; flip: false animation: uk-animation-slide-top-small; duration: 125">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="https://theuwucrew-my.sharepoint.com/:w:/g/personal/jason_offenbaker_com/EcCUJWc9Ao1Ppjsais3hzpkBy_fGbuBA57WaXknmzkClkg?e=IdgYCF">Resume</a></li>
                            <li><a href='#Project-Cards' uk-scroll=''>Projects</a></li>
                            <li><a href="https://github.com/jasoffen">GitHub</a></li>
                            <li><a href="https://twitter.com/jasonoffenbaker">Socials</a></li>
                        </ul>
                    </div>
                    <div>
                        <br></br>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderMobile