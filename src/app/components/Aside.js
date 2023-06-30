import React from 'react'

const Aside = () => {
    return (
        <div className="side-bar">
            <h5 className="tittle">Professional Details</h5>
            <img src="assets/images/avatar.jpg" className="img-responsive" alt="" />
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

            <h5 className="tittle">Attachments</h5>
            <div className="attach bor-btm padding-25">
                <ul>
                    <li>
                        <p><img src="assets/images/pdf-icon.jpg" alt="" /> Curriculum-Vitae.pdf <a href="#."><i className="fa fa-cloud-download"></i></a> <a href="#."><i className="fa fa-eye"></i></a></p>
                    </li>
                    <li>
                        <p><img src="assets/images/word-icon.jpg" alt="" /> COE.docx <a href="#."><i className="fa fa-cloud-download"></i></a> <a href="#."><i className="fa fa-eye"></i></a></p>
                    </li>
                </ul>
            </div>

            <h5 className="tittle">Social Profiles</h5>
            <div className="social-icon bor-btm padding-25">
                <ul>
                    <li> <a href="#."> <i className="fa fa-facebook"></i></a> </li>
                    <li> <a href="#."> <i className="fa fa-google"></i></a> </li>
                    <li> <a href="#."> <i className="fa fa-twitter"></i></a> </li>
                    <li> <a href="#."> <i className="fa fa-linkedin"></i></a> </li>
                    <li> <a href="#."> <i className="fa fa-skype"></i></a> </li>
                </ul>
            </div>

            <h5 className="tittle">Contact Me</h5>
            <div className="contact padding-25">
                <div id="contact_message" className="success-msg"> <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>

                <form role="form" id="contact_form" className="contact-form" method="post">
                    <ul className="row">
                        <li className="col-sm-12">
                            <label>
                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                            </label>
                        </li>
                        <li className="col-sm-12">
                            <label>
                                <input type="text" className="form-control" name="company" id="company" placeholder="Subject" />
                            </label>
                        </li>
                        <li className="col-sm-12">
                            <label>
                                <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message"></textarea>
                            </label>
                        </li>
                        <li className="col-sm-12">
                            <button type="submit" value="submit" id="btn_submit" >Send Message</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Aside