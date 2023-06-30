import React from 'react'

const Blog = ({ active }) => {
    return (
        <div className={`tab-pane fade ${active ? 'in active' : ''}`}>
            <div className="inside-sec">
                <h5 className="tittle">BLOG</h5>

                <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 ">

                    <article> <img className="img-responsive" src="assets/images/blog-img-1.jpg" alt="" />
                        <div className="post-info">
                            <div className="post-in">
                                <div className="extra"> <span><i className="icon-calendar"></i>Aug 29, 2015</span> <span className="margin-left-15"><i className="icon-user"></i>Admin</span> <span className="margin-left-15"><i className="icon-bubbles"></i> Featured</span></div>
                                <a href="#." className="tittle-post"> ENJOYING THE SMALL THINGS </a>
                                <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                                <a href="#." className="btn-1">Read MOre <i className="fa fa-angle-right"></i></a> </div>
                        </div>
                    </article>

                    <article> <img className="img-responsive" src="assets/images/blog-img-2.jpg" alt="" />
                        <div className="post-info">
                            <div className="post-in">
                                <div className="extra"> <span><i className="icon-calendar"></i>Aug 29, 2015</span> <span className="margin-left-15"><i className="icon-user"></i>Admin</span> <span className="margin-left-15"><i className="icon-bubbles"></i> Featured</span></div>
                                <a href="#." className="tittle-post"> ENJOYING THE SMALL THINGS </a>
                                <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                                <a href="#." className="btn-1">Read MOre <i className="fa fa-angle-right"></i></a> </div>
                        </div>
                    </article>


                    <article> <img className="img-responsive" src="assets/images/blog-img-3.jpg" alt="" />
                        <div className="post-info">
                            <div className="post-in">
                                <div className="extra"> <span><i className="icon-calendar"></i>Aug 29, 2015</span> <span className="margin-left-15"><i className="icon-user"></i>Admin</span> <span className="margin-left-15"><i className="icon-bubbles"></i> Featured</span></div>
                                <a href="#." className="tittle-post"> ENJOYING THE SMALL THINGS </a>
                                <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                                <a href="#." className="btn-1">Read MOre <i className="fa fa-angle-right"></i></a> </div>
                        </div>
                    </article>

                    <ul className="pagination">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">Next</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Blog