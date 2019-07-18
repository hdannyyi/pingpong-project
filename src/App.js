import React from "react";
import * as Data from "./data/blade.json";
import Paddle from "./components/paddle";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Paddle blades={Data} />

            <Paddle blades={Data} />
        </div>
    );
}

export default App;
