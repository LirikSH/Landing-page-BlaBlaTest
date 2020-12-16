import React from  'react';
import '../../styles/mainContent.css';
import '../../App.css';
import MainFooter from "../all/MainFooter";
import MainHeader from "../all/MainHeader";
import MainContentFlatDesign from "./MainContentFlatDesign";

class FlatDesign extends React.Component {
    render () {
        return (
            <div className="App">
                <MainHeader/>
                <MainContentFlatDesign/>
                <MainFooter/>
            </div>
        );
    }
}

export default FlatDesign;
