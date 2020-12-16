import React from  'react';
import '../../components/graphic-design/portfolioGraphicDesign.css';
import loop from "../../media/loop.png";
import {  Link } from "react-router-dom"


class PortfolioGraphicDesign extends React.Component {
    render () {
    return (
        <div className="mainPortfolioGD">

            <a className="portfolioTXTh1" >Portfolio</a>
            <a className="portfolioTXTh2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>

            <nav className="portfolioButtons">
                <Link to={"/home"}><button className="portfolioButton">All</button></Link>
                <Link to={"/WebDesign"}><button className="portfolioButton">WEB DESIGN</button></Link>
                <Link to={"/GraphicDesign"}><button className="portfolioButton" graphD>GRAPHIC DESIGN</button></Link>
                <Link to={"/FlatDesign"}><button className="portfolioButton">FLAT DESIGN</button></Link>
                </nav>

            <button className="iconRow musiciconL">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>

            <button className="iconRow musiciconR">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>

        </div>
        );
            }
}

export default PortfolioGraphicDesign;
