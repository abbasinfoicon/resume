import React from 'react'

const Resume = ({ active }) => {
    return (
        <div className={`tab-pane fade ${active ? 'in active' : ''}`}>
            <div className="inside-sec">
                <h5 className="tittle">Bio & Skills</h5>
                <div className="bio-info padding-30">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.<br />
                        <br />
                        Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. <br />
                        <br />
                        Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. </p>
                    <div className="skills">

                        <h5 className="margin-top-30">Hard Skills</h5>
                        <h6>Physical SCiences</h6>

                        <div className="panel-group accordion" id="accordion5">
                            <div className="panel panel-default">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne5"> Sound Engineering</a> </h4>
                                        </div>
                                    </div>

                                    <div className="col-sm-8">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}> <span className="sr-only">60% Complete</span> </div>
                                        </div>

                                        <div id="collapseOne5" className="panel-collapse collapse in">
                                            <div className="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6>Business Administration</h6>
                            <div className="panel panel-default">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion5" href="#collapsetwo5" className="collapsed"> Farming Economics</a> </h4>
                                        </div>
                                    </div>

                                    <div className="col-sm-8">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}> <span className="sr-only">60% Complete</span> </div>
                                        </div>

                                        <div id="collapsetwo5" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className="margin-top-30">Soft Skills</h5>

                        <h6>Application of knowledge</h6>
                        <div className="panel-group accordion" id="accordion1">
                            <div className="panel panel-default">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapsethr" className="collapsed"> Farming Economics</a> </h4>
                                        </div>
                                    </div>

                                    <div className="col-sm-8">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}> <span className="sr-only">60% Complete</span> </div>
                                        </div>

                                        <div id="collapsethr" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ethical">
                            <h6>Follow ethical work practices</h6>
                            <a href="#.">Prioritize Learning Tasks</a> <a href="#.">Make Ethical Choices</a> <a href="#.">Social Work</a> <a href="#.">Community Work</a> </div>
                    </div>
                </div>
            </div>

            <div className="inside-sec margin-top-30">
                <h5 className="tittle">Professional Experience</h5>
                <div className="padding-30 exp-history">

                    <div className="exp">
                        <div className="media-left"> <span className="sun">2002 - 2008</span> </div>
                        <div className="media-body">

                            <div className="company-logo"> <img src="assets/images/company-logo-1.jpg" alt="" /> </div>
                            <h6>Wordpress Developer</h6>
                            <p>Market Network</p>
                            <p>San Francisco, California, USA</p>
                            <p className="margin-top-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) <a href="#.">Read More</a> </p>
                        </div>
                    </div>

                    <div className="exp">
                        <div className="media-left"> <span className="sun">2009 - 2016</span> </div>
                        <div className="media-body">

                            <div className="company-logo"> <img src="assets/images/company-logo-2.jpg" alt="" /> </div>
                            <h6>html5 and css3 Developer</h6>
                            <p>Market Network</p>
                            <p>San Francisco, California, USA</p>
                            <p className="margin-top-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) <a href="#.">Read More</a> </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inside-sec margin-top-30">
                <h5 className="tittle">Academic Background</h5>
                <div className="padding-30 exp-history">

                    <div className="exp">
                        <div className="media-left"> <span className="sun">2002 - 2008</span> </div>
                        <div className="media-body">
                            <div className="company-logo"> <span className="diploma"><i className="fa fa-graduation-cap"></i> Download Diploma</span> </div>
                            <h6>Multimedia Arts</h6>
                            <p>Market Network</p>
                            <p>San Francisco, California, USA</p>
                            <p className="margin-top-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) <a href="#.">Read More</a> </p>
                        </div>
                    </div>

                    <div className="exp">
                        <div className="media-left"> <span className="sun">2009 - 2016</span> </div>
                        <div className="media-body">
                            <div className="company-logo"> <span className="diploma"><i className="fa fa-graduation-cap"></i> Download Diploma</span> </div>
                            <h6>Mathematics in computer science</h6>
                            <p>Market Network</p>
                            <p>San Francisco, California, USA</p>
                            <p className="margin-top-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) <a href="#.">Read More</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume