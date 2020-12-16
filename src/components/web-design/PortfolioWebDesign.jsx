import React from  'react';
import '../../components/web-design/portfolioWebDesign.css';
import loop from "../../media/loop.png";
import {  Link } from "react-router-dom"


class PortfolioWebDesign extends React.Component {
    render () {
    return (
        <div className="mainPortfolioWD">

            <a className="portfolioTXTh1" >Portfolio</a>
            <a className="portfolioTXTh2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>

                <nav className="portfolioButtons">
                <Link to={"/home"}><button className="portfolioButton">All</button></Link>
                <Link to={"/WebDesign"}><button className="portfolioButton WebD">WEB DESIGN</button></Link>
                <Link to={"/GraphicDesign"}><button className="portfolioButton">GRAPHIC DESIGN</button></Link>
                <Link to={"/FlatDesign"}><button className="portfolioButton">FLAT DESIGN</button></Link>
                </nav>

            <button className="iconRow photoiconL ">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
                    </button>

            <button className=" iconRow phoneiconC" data-filter="webDesign">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
                    </button>

            <button className="iconRow photoiconR ">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
                    </button>

            </div>
            );
                }
}

export default PortfolioWebDesign;
