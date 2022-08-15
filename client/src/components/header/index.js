import React from 'react';

function Header() {
    return (
        // Begin Navbar Section
        <section id='Navbar'>
            <nav class="uk-navbar-container" uk-sticky="" uk-navbar="">
                <div class="uk-navbar-center" tabindex="0">
                    <div class="uk-navbar-center-left">
                        <ul class="uk-navbar-nav uk-animation-slide-left">
                            <li><a href="https://theuwucrew-my.sharepoint.com/:w:/g/personal/jason_offenbaker_com/EcCUJWc9Ao1Ppjsais3hzpkBy_fGbuBA57WaXknmzkClkg?e=IdgYCF" target='_blank' rel="noreferrer">Resume</a></li>
                            <li>
                                <a href='#Project-Cards' uk-scroll=''>Projects</a>
                            </li>
                        </ul>
                    </div>
                    <a class="uk-navbar-item uk-logo uk-animation-slide-top" href='#' uk-scroll=''>Jason Offenbaker</a>
                    <div class="uk-navbar-center-right">
                        <ul class="uk-navbar-nav uk-animation-slide-right">
                                <li><a href="https://github.com/jasoffen" target='_blank' rel="noreferrer">GitHub</a></li>
                            <li><a href="https://twitter.com/jasonoffenbaker">Socials</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </section>
    )
}

export default Header