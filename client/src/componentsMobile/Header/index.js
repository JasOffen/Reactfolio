import React from "react";

function HeaderMobile() {
    return (
        <div uk-sticky="position: bottom">
            <nav class="uk-navbar uk-navbar-container" uk-navbar=''>
            <div class="uk-navbar-left ">
                <h1 class="uk-margin-top uk-margin-left">Jason Offenbaker</h1>
            </div>
                <div class="uk-navbar-right">
                    <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon="" href="#"></a>
                    <div class="uk-navbar-dropdown" uk-dropdown="pos: top-right">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Resume</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Socials</a></li>
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