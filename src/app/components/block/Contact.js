import React from 'react'

const Contact = ({ active }) => {
    return (
        <div className={`tab-pane fade ${active ? 'in active' : ''}`}>
            <div className="inside-sec">
                <h5 className="tittle">CONATCT ME</h5>

                <section>
                    <div className="padding-left-30 padding-right-30 padding-top-50 padding-bottom-50">
                        <div className="row ">
                            <div className="col-md-4 text-center">
                                <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-xlarge dark-text">
                                    <div className="ib-icon"> <i className="fa fa-mobile text-primary"></i> </div>
                                    <div className="ib-info text-dark">
                                        <p>+61 3 8376 6284</p>
                                        <p>+61 3 8376 6284</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center">
                                <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                                    <div className="ib-icon"> <i className="fa fa-map-marker text-primary"></i> </div>
                                    <div className="ib-info text-dark">
                                        <p>PO Box 21177 Litte Lonsdale St, Melbourne Victoria 8011 Australia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center">
                                <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                                    <div className="ib-icon"> <i className="fa fa-envelope-o text-primary"></i> </div>
                                    <div className="ib-info text-dark">
                                        <p className="no-margin-bottom"><a href="#." className="text-white">support@yourcompany.com</a></p>
                                        <p className="no-margin-bottom"><a href="#." className="text-white">support@yourcompany.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="map-block">
                        <div className="map-wrapper" id="map-canvas" data-lat="-37.814199" data-lng="144.961560" data-zoom="13" data-style="1"></div>
                        <div className="markers-wrapper addresses-block"> <a className="marker" data-rel="map-canvas" data-lat="-37.814199" data-lng="144.961560" data-string="Envato"></a> </div>
                    </section>

                    <h5 className="tittle">SAY HELLO</h5>
                    <div className="contact style-3 light-border padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">

                        <div className="contact-right">
                            <div id="contact_message_1" className="success-msg"> <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>

                            <form role="form" id="contact_form_1" className="contact-form" method="post">
                                <ul className="row">
                                    <li className="col-sm-4">
                                        <label>
                                            <input type="text" className="form-control" name="name" id="name_1" placeholder="NAME" />
                                        </label>
                                    </li>
                                    <li className="col-sm-4">
                                        <label>
                                            <input type="text" className="form-control" name="email" id="email_1" placeholder="EMAIL" />
                                        </label>
                                    </li>
                                    <li className="col-sm-4">
                                        <label>
                                            <input type="text" className="form-control" name="company" id="company_1" placeholder="SUBJECT" />
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        <label>
                                            <textarea className="form-control" name="message" id="message_1" rows="5" placeholder="CONTENT..."></textarea>
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        <button type="submit" value="submit" id="btn_submit_1" >SEND ME</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact