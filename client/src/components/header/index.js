import React from 'react';

function Header() {
    return (
        // Begin Navbar Section
        <section id='Navbar'>
            <nav class="uk-navbar-container uk-margin" uk-navbar="">
                <div class="uk-navbar-center" tabindex="0">
                    <div class="uk-navbar-center-left">
                        <ul class="uk-navbar-nav uk-animation-slide-left">
                            <li><a href="#">Resume</a></li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <a class="uk-navbar-item uk-logo uk-animation-slide-top" href="#">Jason Offenbaker</a>
                    <div class="uk-navbar-center-right">
                        <ul class="uk-navbar-nav uk-animation-slide-right">
                                <li><a href="#">GitHub</a></li>
                            <li><a href="#">Socials</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </section>
    )
}

export default Header