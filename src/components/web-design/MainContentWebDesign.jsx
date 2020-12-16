import React from  'react';
import StartInf from "../all/StartInf"
import PortfolioWebDesign from "./PortfolioWebDesign"
import AboutUs from "../all/AboutUs"
import ContactUs from "../all/ContactUs"
import '../../styles/mainContent.css';
import '../../App.css';

class MainContentWebDesign extends React.Component {
    render () {
        return (
            <main className="mainContent">
                <StartInf/>
                <PortfolioWebDesign/>
                <AboutUs/>
                <ContactUs/>
            </main>

        );
    }
}

export default MainContentWebDesign;
