import React, {Component} from  'react';
import '../../styles/mainFooter.css';
import '../../App.css';
import up from "../../media/up.png";
import Scroll from 'react-scroll-to-element';

class MainFooter extends React.Component {
    render () {
        return (
            <footer className="mainFooter" itemID="footer">
                <div className="madeText">
                    © Copyright 2016 Bla Bla Studio | One Page Flat Template
                </div>
                <Scroll>
                <button className="upButton">
                    <img src={up} className="upImage" alt="up"/>
                </button>
                </Scroll>
            </footer>

        );
    }
}
export default MainFooter;
