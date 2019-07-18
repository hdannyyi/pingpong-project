import React from "react";
import * as BladesData from "./data/blade.json";
import * as RubbersData from "./data/rubber.json";
import Paddle from "./components/paddle";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Paddle blades={BladesData} rubbers={RubbersData} />

            <Paddle blades={BladesData} rubbers={RubbersData} />
        </div>
    );
}

export default App;
