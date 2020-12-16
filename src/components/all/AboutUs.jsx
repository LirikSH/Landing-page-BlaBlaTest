import React from  'react';
import '../../styles/aboutUs.css';
import melannie from "../../media/aboutUsMedia/melannie.png";
import jhonnie from "../../media/aboutUsMedia/jhonnie.png";
import daniel from "../../media/aboutUsMedia/daniel.png";
import facebook  from "../../media/aboutUsMedia/facebook.png";
import twitter  from "../../media/aboutUsMedia/twitter.png";
import google  from "../../media/aboutUsMedia/google.png";
import dribble  from "../../media/aboutUsMedia/dribble.png";


class AboutUs extends React.Component {
    render () {
            return (
                <div className="aboutUs">
                    <a className="aboutUsTxth1">About Us</a>
                    <a className="aboutUsTxth2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>

                       <section className="aboutSect sectionsL">
                            <div className="ALD">
                            <img className="aboutImg" src={melannie}/>
                            <div className="socialNetworks aboutImg">
                                <a className="socImgF" href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
                                <a className="socImgT" href="https://twitter.com/" target="_blank"><img  src={twitter}/></a>
                                <a className="socImgG" href="https://plus.google.com/" target="_blank"><img  src={google}/></a>
                                <a className="socImgD" href="https://dribbble.com/" target="_blank"><img src={dribble}/></a>
                            </div>

                            </div>
                            <h3>Melannie Doe</h3>
                            <h4>Project Manager</h4>
                            <p>
                                Ut wisi enim ad minimveniam, quis nostrud exerci tation
                            </p>
                       </section>

                        <section className="aboutSect sectionsC">
                            <div className="ALD">
                            <img className="aboutImg" src={jhonnie}/>
                            <div className="socialNetworks aboutImg">
                                <a className="socImgF" href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
                                <a className="socImgT" href="https://twitter.com/" target="_blank"><img  src={twitter}/></a>
                                <a className="socImgG" href="https://plus.google.com/" target="_blank"><img  src={google}/></a>
                                <a className="socImgD" href="https://dribbble.com/" target="_blank"><img src={dribble}/></a>
                            </div>
                            </div>
                            <h3>Jhonnie Doe</h3>
                            <h4>Graphic Designer</h4>
                            <p>
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </section>

                        <section className="aboutSect sectionsR">
                            <div className="ALD">
                            <img className="aboutImg" src={daniel}/>
                            <div className="socialNetworks aboutImg">
                                <a className="socImgF" href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
                                <a className="socImgT" href="https://twitter.com/" target="_blank"><img  src={twitter}/></a>
                                <a className="socImgG" href="https://plus.google.com/" target="_blank"><img  src={google}/></a>
                                <a className="socImgD" href="https://dribbble.com/" target="_blank"><img src={dribble}/></a>
                            </div>
                            </div>
                            <h3>Daniel Doe</h3>
                            <h4>Web Designer</h4>
                            <p>
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo </p>
                        </section>

                </div>
            );
        }
    }
export default AboutUs;
