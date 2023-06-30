"use client";
import Link from "next/link";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/block/About";
import Blog from "./components/block/Blog";
import Contact from "./components/block/Contact";
import Portfolio from "./components/block/Portfolio";
import Resume from "./components/block/Resume";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState('about');
  const [menu, setMenu] = useState(false);

  const handleClick = (menu) => {
    setActive(menu);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div id="wrap">
      <Header menu={menu} setmenu={setMenu} />

      <main className={`cd-main-content ${menu ? 'lateral-menu-is-open' : ''}`}>
        <div id="content" className="bg">
          <div className="resume">
            <div className="container">

              <div className="top-head">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Resume </h4>
                    <Link href="/resume">Edit Resume</Link>
                  </div>
                  <div className="col-sm-6"> <button id="cd-menu-trigger" onClick={handleMenu}><span className="cd-menu-icon"></span></button> </div>
                </div>
              </div>

              <nav className="margin-bottom-30">
                <button type="button" className="navbar-toggle collapsed">
                  <span className="tittle">MENU</span> <span className="fa fa-navicon icon-nav"></span>
                </button>
                <div className="collapse navbar-collapse">
                  <ul className="isop-filter">
                    <li className={active === 'about' ? 'active' : ''}>
                      <span onClick={() => handleClick('about')}>
                        <i className="icon-user"></i> ABOUT ME
                      </span>
                    </li>
                    <li className={active === 'resume' ? 'active' : ''}>
                      <span onClick={() => handleClick('resume')}>
                        <i className="icon-book-open"></i> RESUME
                      </span>
                    </li>
                    <li className={active === 'portfolio' ? 'active' : ''}>
                      <span onClick={() => handleClick('portfolio')}>
                        <i className="icon-rocket"></i> PORTFOLIO
                      </span>
                    </li>
                    <li className={active === 'blog' ? 'active' : ''}>
                      <span onClick={() => handleClick('blog')}>
                        <i className="icon-note"></i> BLOG
                      </span>
                    </li>
                    <li className={active === 'contact' ? 'active' : ''}>
                      <span onClick={() => handleClick('contact')}>
                        <i className="icon-pencil"></i> CONTACT ME
                      </span>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="row">
                <div className="col-md-4">
                  <Aside />
                </div>

                <div className="col-md-8">
                  <div className="tab-content">
                    <About active={active === 'about' ? 'active' : ''} />
                    <Resume active={active === 'resume' ? 'active' : ''} />
                    <Portfolio active={active === 'portfolio' ? 'active' : ''} />
                    <Blog active={active === 'blog' ? 'active' : ''} />
                    <Contact active={active === 'contact' ? 'active' : ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
