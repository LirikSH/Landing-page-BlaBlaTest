import React from  'react';
import '../../styles/mainContent.css';
import '../../App.css';
import MainContentGraphicDesign from "./MainContentGraphicDesign";
import MainFooter from "../all/MainFooter";
import MainHeader from "../all/MainHeader";

class GraphicDesign extends React.Component {
    render () {
        return (
            <div className="App">
                <MainHeader/>
                <MainContentGraphicDesign/>
                <MainFooter/>
            </div>
        );
    }
}

export default GraphicDesign;
