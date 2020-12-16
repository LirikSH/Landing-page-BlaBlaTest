import React from  'react';
import logo from "../../media/logo.png";
import '../../App.css';
import '../../styles/mainHeader.css';
import Scroll from 'react-scroll-to-element';

class MainHeader extends React.Component {
    render () {
        return (
            <header id="header">
                <img src={logo} className="appLogo" alt="logo"/>
                <a className="bla">BLA BLA</a>
                <a className="opft">One Page Flat Template</a>
               <Scroll offset={90}><button className="headerButton home">HOME</button></Scroll>
                <Scroll offset={410}><button className="headerButton portfolio">PORTFOLIO</button></Scroll>
                <Scroll offset={1090}><button className="headerButton about">ABOUT</button></Scroll>
               <Scroll offset={1440}><button className="headerButton contact">CONTACT</button></Scroll>
            </header>
        )
    }
};

export default MainHeader;
