import React from 'react'

const About = ({ active }) => {
    return (
        <div className={`tab-pane fade ${active ? 'in active' : ''}`}>
            <div className="inside-sec">
                <h5 className="tittle">About Me</h5>
                <section className="about-me padding-top-10">
                    <ul className="personal-info">
                        <li><p> <span> Name</span> John Doe </p></li>
                        <li><p> <span> Age</span> 38 Years </p></li>
                        <li><p> <span> Location</span> Rome, Italy </p></li>
                        <li><p> <span> Experience</span> 15 Years </p></li>
                        <li><p> <span> Degree</span> MBA </p></li>
                        <li><p> <span> Career Level</span> Mid-Level </p></li>
                        <li><p> <span> Phone</span> (800) 123-4567 </p></li>
                        <li><p> <span> FAX</span> (800) 123-4568 </p></li>
                        <li><p> <span> E-mail</span> <a href="#."> example@example.com</a> </p></li>
                        <li><p> <span> Website</span><a href="#."> example.com </a></p></li>
                    </ul>

                    <h5 className="tittle">I’m Web Designer</h5>
                    <div className="padding-20">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. <br />
                            <br />
                            Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. <br />
                            <br />
                        </p>
                    </div>

                    <h5 className="tittle">Services</h5>
                    <div className="row padding-20 margin-top-50">
                        <div className="col-md-4 text-center">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-whatsapp"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">WEB DEVELOPMENT</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-magic"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">WEB DESIGN</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-smile-o"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">RESPONSIVE</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row padding-20 margin-bottom-50">
                        <div className="col-md-4">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-diamond"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">Unique Design</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-server"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">Demos Layout</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon-box i-large ib-black">
                                <div className="ib-icon"> <i className="fa fa-scissors"></i> </div>
                                <div className="ib-info">
                                    <h4 className="h6">Clean Code</h4>
                                    <p>We have created the new macbook psd version with scalable vector shapes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 className="tittle">Skills</h5>
                    <div className="panel-group accordion padding-20" id="accordion">
                        <div className="panel panel-default">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="panel-heading">
                                        <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" className="collapsed"> Photoshop</a> </h4>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}> <span className="sr-only">60% Complete</span> </div>
                                    </div>

                                    <div id="collapseOne" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="panel panel-default">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="panel-heading">
                                        <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" className="collapsed"> Dreamviewer</a> </h4>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}> <span className="sr-only">60% Complete</span> </div>
                                    </div>

                                    <div id="collapsetwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="panel-heading">
                                        <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsethree" className="collapsed"> HTML5/CSS3</a> </h4>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}> <span className="sr-only">60% Complete</span> </div>
                                    </div>

                                    <div id="collapsethree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About