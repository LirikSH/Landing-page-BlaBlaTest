import React from  'react';
import '../../styles/mainContent.css';
import '../../App.css';
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import MainFooter from "./MainFooter";

class Home extends React.Component {
    render () {
        return (
            <div className="App">
                <MainHeader/>
                <MainContent/>
                <MainFooter/>
            </div>

        );
    }
}

export default Home;
