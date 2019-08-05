import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BladesData from "./data/blade.json";
import * as RubbersData from "./data/rubber.json";
import Paddle from "./components/paddle";
import Dashboard from "./components/dashboard";
import "./App.css";

class ComparePaddles extends Component {
    state = {
        paddle: {}
    };

    render() {
        return (
            <>
                <Paddle
                    blades={BladesData}
                    rubbers={RubbersData}
                    paddleToCompare={this.props.location.state.paddle}
                />
                <Paddle blades={BladesData} rubbers={RubbersData} />
            </>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Dashboard} />

                    <Route path="/compare" component={ComparePaddles} />
                </div>
            </Router>
        );
    }
}

export default App;
