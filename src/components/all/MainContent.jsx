import React from  'react';
import StartInf from "./StartInf"
import PortfolioAll from "./PortfolioAll"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import '../../styles/mainContent.css';
import '../../App.css';

class MainContent extends React.Component {
    render () {
        return (
            <main className="mainContent">
                <StartInf/>
                <PortfolioAll/>
                <AboutUs/>
                <ContactUs/>
            </main>

        );
    }
}

export default MainContent;
