import React from  'react';
import '../../styles/mainContent.css';
import '../../App.css';
import MainContentWebDesign from "./MainContentWebDesign";
import MainFooter from "../all/MainFooter";
import MainHeader from "../all/MainHeader";

class WebDesign extends React.Component {
    render () {
        return (
            <div className="App">
                <MainHeader/>
                <MainContentWebDesign/>
                <MainFooter/>
            </div>
        );
    }
}

export default WebDesign;
