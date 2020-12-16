import React from  'react';
import StartInf from "../all/StartInf"
import PortfolioGraphicDesign from "./PortfolioGraphicDesign"
import AboutUs from "../all/AboutUs"
import ContactUs from "../all/ContactUs"
import '../../styles/mainContent.css';
import '../../App.css';


class MainContentGraphicDesign extends React.Component {
    render () {
        return (
            <main className="mainContent">
                <StartInf/>
                <PortfolioGraphicDesign/>
                <AboutUs/>
                <ContactUs/>
            </main>

        );
    }
}

export default MainContentGraphicDesign;
