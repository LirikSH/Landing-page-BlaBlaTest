import React from  'react';
import '../../styles/portfolioAll.css';
import loop from "../../media/loop.png";
import {  Link } from "react-router-dom"

class PortfolioAll extends React.Component {
    render () {
    return (
        <div className="mainPortfolio">
            <a className="portfolioTXTh1">Portfolio</a>
            <a className="portfolioTXTh2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>
            <nav className="portfolioButtons">
                <Link to={"/home"}><button className="portfolioButton">All</button></Link>
                <Link to={"/WebDesign"}><button className="portfolioButton">WEB DESIGN</button></Link>
                <Link to={"/GraphicDesign"}><button className="portfolioButton">GRAPHIC DESIGN</button></Link>
                <Link to={"/FlatDesign"}><button className="portfolioButton">FLAT DESIGN</button></Link>
                </nav>

        <button className="iconRow photoicon1row">
            <button className="elipseImg"><img className="loopImg" src={loop}/></button>
        </button>
        <button className="iconRow musicicon1row  ">
            <button className="elipseImg"><img className="loopImg" src={loop}/></button>
        </button>
        <button className="iconRow settingicon1row">
            <button className="elipseImg"><img className="loopImg" src={loop}/></button>
        </button>
        <button className="iconRow  mapicon1row" data-filter="webDesign">
            <button className="elipseImg"><img className="loopImg" src={loop}/></button>
        </button>

            <button className="phoneicon2row iconRow" data-filter="webDesign">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
            <button className="ballicon2row iconRow">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
            <button className="photoicon2row iconRow">
                <button className="elipseImg"><img className="loopImg" src={loop}/></button>
            </button>
            <button className="musicicon2row iconRow">
                 <button className="elipseImg"><img className="loopImg" src={loop}/></button>
             </button>
</div>
    );
}
}
export default PortfolioAll;
