"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = ({ menu, setmenu }) => {

    const [close, setClose] = useState(menu);

    useEffect(() => {
        setClose(menu);
    }, [menu]);

    const handleClose = () => {
        setClose(true);
        setmenu(false);
    };

    return (
        <nav id="cd-lateral-nav" className={`${close ? 'lateral-menu-is-open' : 'false'}`}>
            <div className='hc'>
                <h5 className="tittle">MotiCv</h5>
                <button onClick={handleClose}><i className="ion-close-round"></i></button>
            </div>
            <ul className="cd-navigation">
                <li><Link href="/">Index Main</Link></li>
                <li><Link href="about">About Me</Link></li>
                <li><Link href="/">Portfolio</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Blog Details</Link></li>
                <li><Link href="resume">Resume</Link></li>
            </ul>
            <h5 className="tittle">Latest Post</h5>
            <ul className="latest-post">

                <li>
                    <div className="media">
                        <div className="media-left"> <a href="#."><img src="assets/images/small-img.jpg" alt="" /></a></div>
                        <div className="media-body"> <a href="#.">Hello Itaewon
                            Project</a>
                            <p className="font-crimson font-italic">Webdesign</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="media">
                        <div className="media-left"> <a href="#."><img src="assets/images/small-img-1.jpg" alt="" /></a></div>
                        <div className="media-body"> <a href="#.">Casual in grey</a>
                            <p className="font-crimson font-italic">Webdesign</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="media">
                        <div className="media-left"> <a href="#."><img src="assets/images/small-img-2.jpg" alt="" /></a></div>
                        <div className="media-body"> <a href="#.">Transittions</a>
                            <p className="font-crimson font-italic">Webdesign</p>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header