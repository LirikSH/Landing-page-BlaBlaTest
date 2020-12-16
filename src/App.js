import React, { Component } from 'react';
import MainHeader from "./components/all/MainHeader";
import MainContent from "./components/all/MainContent";
import MainFooter from "./components/all/MainFooter";
import MainContentWebDesign  from "./components/web-design/MainContentWebDesign";
import Home from "./components/all/Home";
import WebDesign from "./components/web-design/WebDesign";
import GraphicDesign from "./components/graphic-design/GraphicDesign";
import FlatDesign from "./components/flat-design/FlatDesign";
import {
    Route,
    BrowserRouter,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"
import {createBrowserHistory} from 'history'


class App extends Component {
    render() {
        const { history } = this.props

        return (
            <BrowserRouter>
                <Switch>
                    <Route history={history} path='/home' component={Home} />
                    <Route history={history} path='/WebDesign' component={WebDesign} />
                    <Route history={history} path='/GraphicDesign' component={GraphicDesign}/>
                    <Route history={history} path='/FlatDesign' component={FlatDesign}/>
                    <Redirect from='/' to='/home'/>
                </Switch>
           </BrowserRouter>
        );
    }
}
export default App;

