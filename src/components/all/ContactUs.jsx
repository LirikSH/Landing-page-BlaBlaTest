import React from  'react';
import '../../styles/contactUs.css';
import '../../fonts/fontawesome/css/all.css';

class ContactUs extends React.Component {
    render() {
        return (

            <div className="contactUs">
                <a className="contactUsTxt">Contact Us</a>
                <a className="contactAboutTxt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>

                <form className="inputForms" id="inputForms">
                    <input type="text" className="inputName" placeholder="Your name"/>
                    <input type="email" className="inputEmail" placeholder="Your email"/>
                    <textarea className="inputMessage" placeholder="Your message"/>
                    <button type="submit" className="submitButton">SUBMIT</button>
                </form>

                <div className="mapBlock" id="map">
                    <p className="contactLocationTxt"><i className="fas fa-map-marker-alt"></i> Bla Bla Company 125009
                        Moscow, Red Square 1</p>
                    <div id="myMap" className="mapY">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0130aefe8fc4cdc349c67b7889fbee22af9c9a6041efc1c4e19cb595a7c4ab1d&amp;source=constructor"
                            width="456" height="265" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactUs;
