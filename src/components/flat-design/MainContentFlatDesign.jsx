import React from  'react';
import StartInf from "../all/StartInf"
import PortfolioFlatDesign from "./PortfolioFlatDesign"
import AboutUs from "../all/AboutUs"
import ContactUs from "../all/ContactUs"
import '../../styles/mainContent.css';
import '../../App.css';


class MainContentFlatDesign extends React.Component {
    render () {
        return (
            <main className="mainContent">
                <StartInf/>
                <PortfolioFlatDesign/>
                <AboutUs/>
                <ContactUs/>
            </main>

        );
    }
}

export default MainContentFlatDesign;
