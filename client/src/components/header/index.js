import React from 'react';

function Header(){
    return(
        // Begin Navbar Section
        <section id='Navbar'>
            <ul>
                <li>
                    {/* Link to Resume Page and/or just the document itself to download(fs.download?) */}
                    Resume
                </li>
                <li>
                    {/* Can have github stuff in here, but preferably non coding stuff in here too? Blender, Arcade stuff, Unreal*/}
                    Projects
                </li>
                <li>
                    {/* Animated after loadin */}
                    Jason Offenbaker
                </li>
                <li>
                    {/* Direct _Target link to GitHub */}
                    GitHub
                </li>
                <li>
                    {/* Links to Twitter, Linkdin, etc page*/}
                    Socials
                </li>
            </ul>
        </section>
    )
}

export default Header