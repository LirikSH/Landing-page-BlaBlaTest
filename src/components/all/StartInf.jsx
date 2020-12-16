import React from  'react';
import '../../styles/startInf.css';
import down from "../../media/down.png";
import Scroll from 'react-scroll-to-element';

class StartInf extends React.Component {
    render () {
        return (
        <div className="startInf" itemID="startInf">
            <a className="brandTxt">We Build <a className=" brandTxtB">Brand</a></a>
            <a className="infUsTxt">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</a>
            <Scroll offset={540}><button className="infLearnButton">LEARN MORE</button></Scroll>
            <Scroll offset={540}><img className="infDown" src={down}/></Scroll>
        </div>
        )
    }
}

export default StartInf;
