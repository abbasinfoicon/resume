import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div id="content" className="resune-edit">
            <div className="resume">
                <div className="container">
                    <div className="top-head">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>Resume </h4>
                                <Link href="/">View Resume</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="side-bar">
                                <h5 className="tittle">Professional Details</h5>
                                <label className="btn-file"> <i className="fa fa-camera"></i> Click to add diploma
                                    <input type="file" style={{ display: 'none' }} />
                                </label>
                                <form>
                                    <ul className="personal-info">
                                        <li>
                                            <p> <span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </span>
                                                <input className="form-control" type="text" placeholder="Title" />
                                            </p>
                                        </li>
                                        <li> <a href="#" className="btn"><i className="fa fa-plus"></i> ADD INFO</a> </li>
                                    </ul>
                                </form>

                                <h5 className="tittle">Attachments</h5>
                                <div className="attach bor-btm padding-25">
                                    <ul>
                                        <li>
                                            <p><img src="images/pdf-icon.jpg" alt="" /> Curriculum-Vitae.pdf <a href="#."><i className="fa fa-cloud-download"></i></a> <a href="#."><i className="fa fa-eye"></i></a></p>
                                        </li>
                                        <li>
                                            <p><img src="images/word-icon.jpg" alt="" /> COE.docx <a href="#."><i className="fa fa-cloud-download"></i></a> <a href="#."><i className="fa fa-eye"></i></a></p>
                                        </li>
                                    </ul>
                                    <p> <span>
                                        <input className="form-control" type="text" placeholder="Title" />
                                    </span> </p>
                                    <a href="#" className="btn"><i className="fa fa-plus"></i> Add Attachment</a>
                                </div>

                                <h5 className="tittle">Social Profiles</h5>
                                <div className="social-icon bor-btm padding-25">
                                    <ul>
                                        <li> <i className="fa fa-facebook"></i>
                                            <input className="form-control" type="text" placeholder="facebook.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-twitter"></i>
                                            <input className="form-control" type="text" placeholder="twitter.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-google-plus"></i>
                                            <input className="form-control" type="text" placeholder="google.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-linkedin"></i>
                                            <input className="form-control" type="text" placeholder="linkedin.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-dribbble"></i>
                                            <input className="form-control" type="text" placeholder="dribbble.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-behance"></i>
                                            <input className="form-control" type="text" placeholder="behance.com/billgates" />
                                        </li>
                                        <li> <i className="fa fa-stumbleupon"></i>
                                            <input className="form-control" type="text" placeholder="stumbleupon.com/billgates" />
                                        </li>
                                    </ul>
                                </div>

                                <h5 className="tittle">Contact Me</h5>
                                <div className="contact padding-25">
                                    <div id="contact_message" className="success-msg"> <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>

                                    <form role="form" id="contact_form" className="contact-form" method="post" onSubmit="return false">
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
                                                <button type="submit" value="submit" id="btn_submit" onClick="proceed();">Send Message</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="inside-sec">
                                <h5 className="tittle">Bio & Skills</h5>
                                <div className="bio-info padding-30">
                                    <textarea className="form-control" placeholder="Write your description here"></textarea>
                                    <div className="skills margin-top-50">

                                        <h6>Add A Skill</h6>

                                        <div className="row">

                                            <div className="col-sm-6">
                                                <select className="selectpicker">
                                                    <option> All Categories</option>
                                                    <option>Web Design</option>
                                                    <option>Development</option>
                                                </select>
                                                <span className="add-custm">or <a href="#."> Add A Custom Category</a></span> </div>

                                            <div className="col-sm-6">
                                                <select className="selectpicker">
                                                    <option>Skills</option>
                                                    <option>HTML5 CSS3</option>
                                                    <option>Photoshop</option>
                                                </select>
                                                <span className="add-custm">or <a href="#."> Add A Custom Skills</a></span> </div>
                                        </div>

                                        <div className="disply-type">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="radio radio-inline">
                                                        <input type="radio" id="inlineRadio1" value="option1" name="radioInline" />
                                                        <label for="inlineRadio1"> Display As Bar </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="radio radio-inline">
                                                        <input type="radio" id="inlineRadio2" value="option1" name="radioInline" />
                                                        <label for="inlineRadio2"> Display As Tag </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="skill-type-info">
                                            <label> Skill Level
                                                <input type="text" className="form-control" placeholder="0" />
                                            </label>
                                            <label>Skill Description
                                                <textarea className="form-control" placeholder="" />
                                            </label>
                                        </div>
                                        <a href="#" className="btn"><i className="fa fa-plus"></i> Add Skill</a> </div>
                                </div>
                            </div>

                            <div className="inside-sec margin-top-30">
                                <h5 className="tittle">Professional Experience</h5>
                                <div className="padding-30 exp-history">

                                    <div className="exp">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <label> Duration
                                                    <input type="text" className="form-control" placeholder="YYYY - YYYY" />
                                                </label>
                                                <label> Job Title
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                                <label> Company Name
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                                <label> Location
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                            </div>

                                            <div className="col-sm-5">
                                                <label className="btn-file"> <i className="fa fa-camera"></i> Click to attach logo
                                                    <input type="file" style={{ display: 'none' }} />
                                                </label>
                                            </div>

                                            <div className="col-sm-12">
                                                <label> Details
                                                    <textarea className="form-control" placeholder="" />
                                                </label>
                                                <a href="#" className="btn margin-top-20"><i className="fa fa-plus"></i> Add Experience</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inside-sec margin-top-30">
                                <h5 className="tittle">Academic Background</h5>
                                <div className="padding-30 exp-history">

                                    <div className="exp">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <label> Qualification
                                                    <input type="text" className="form-control" placeholder="YYYY - YYYY" />
                                                </label>
                                                <label> Degree
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                                <label> Institute / University Name
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                                <label> Year of Obtention
                                                    <input type="text" className="form-control" placeholder="" />
                                                </label>
                                            </div>

                                            <div className="col-sm-5">
                                                <label className="btn-file"> <i className="fa fa-camera"></i> Click to add diploma
                                                    <input type="file" style={{ display: 'none' }} />
                                                </label>
                                            </div>


                                            <div className="col-sm-12">
                                                <label> Details
                                                    <textarea className="form-control" placeholder="" />
                                                </label>
                                                <a href="#" className="btn margin-top-20"><i className="fa fa-plus"></i> Add Experience</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="save-info">
                                <a href="#." className="btn">Cancel</a> <a href="#." className="btn">Save Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page