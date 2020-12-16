import React from  'react';
import '../../components/flat-design/portfolioFlatDesign.css';
import loop from "../../media/loop.png";
import {  Link } from "react-router-dom"

class PortfolioFlatDesign extends React.Component {
    render () {
    return (
        <div className="mainPortfolioFD">
            <a className="portfolioTXTh1" >Portfolio</a>
            <a className="portfolioTXTh2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>
            <nav className="portfolioButtons">
                <Link to={"/home"}><button className="portfolioButton">All</button></Link>
                <Link to={"/WebDesign"}><button className="portfolioButton">WEB DESIGN</button></Link>
                <Link to={"/GraphicDesign"}><button className="portfolioButton">GRAPHIC DESIGN</button></Link>
                <Link to={"/FlatDesign"}><button className="portfolioButton fletD">FLAT DESIGN</button></Link>
                </nav>

            <button className="iconRow settingiconL">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
            <button className="iconRow  mapiconC" data-filter="webDesign">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
            <button className="iconRow balliconR ">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
        </div>
        );
                }

}

export default PortfolioFlatDesign;
