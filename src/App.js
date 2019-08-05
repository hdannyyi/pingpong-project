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

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.paddle) {
            console.log("location: ", this.props.location.state);
            console.log("new paddle: ", this.props.location.state.paddle);
            // this.setState(this.props.location.state.paddle);
            this.setState({ paddle: this.props.location.state.paddle });

            console.log(this.state.paddle);
        }
    }

    render() {
        return (
            <>
                <Paddle
                    blades={BladesData}
                    rubbers={RubbersData}
                    paddleToCompare={this.state.paddle}
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
