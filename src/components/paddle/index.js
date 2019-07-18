import React, { Component } from "react";
import "./styles.css";

class Paddle extends Component {
    state = {
        selectedForehand: this.props.rubbers.default[0] || "",
        selectedBlade: this.props.blades.default[0] || "",
        selectedBackhand: this.props.rubbers.default[0] || ""
    };

    renderBlades = () => {
        return this.props.blades.default.map((blade, i) => {
            return <option key={i}>{blade.b_name}</option>;
        });
    };

    renderRubbers = () => {
        return this.props.rubbers.default.map((rubber, i) => {
            return <option key={i}>{rubber.r_name}</option>;
        });
    };

    handleInput = (e, type) => {
        // console.log(e.target.value);
        console.log(this.props.rubbers.default);
        const dataToSet = {};
        type === "Blade"
            ? (dataToSet[`selected${type}`] = this.props.blades.default.find(
                  x => x.b_name === e.target.value
              ))
            : (dataToSet[`selected${type}`] = this.props.rubbers.default.find(
                  x => x.r_name === e.target.value
              ));
        console.log("data to set: ", dataToSet[`selected${type}`]);
        this.setState(dataToSet);
    };

    render() {
        const {
            selectedBackhand,
            selectedForehand,
            selectedBlade
        } = this.state;
        return (
            <>
                <div className="wrapper">
                    <form>
                        <div className="data-view" id="forehand">
                            <div className="paddle-label">
                                <label>FH</label>
                            </div>

                            <select
                                type="text"
                                onChange={e => {
                                    this.handleInput(e, "Forehand");
                                }}
                            >
                                {this.renderRubbers()}
                            </select>
                            <li>Weight: 1.5g</li>
                            <li>Speed: {selectedForehand.r_speed}</li>
                            <li>Control: {selectedForehand.r_control}</li>
                        </div>
                        <div className="data-view" id="blade">
                            <div className="paddle-label">
                                <label>Blade</label>
                            </div>
                            <select
                                type="text"
                                onChange={e => {
                                    this.handleInput(e, "Blade");
                                }}
                            >
                                {this.renderBlades()}
                            </select>
                            <li>Weight: {selectedBlade.b_weight}g</li>
                            <li>Speed: {selectedBlade.b_speed}</li>
                            <li>Control: {selectedBlade.b_control}</li>
                        </div>
                        <div className="data-view" id="backhand">
                            <div className="paddle-label">
                                <label>BH</label>
                            </div>
                            <select
                                type="text"
                                value={selectedBackhand.r_name}
                                onChange={e => {
                                    this.handleInput(e, "Backhand");
                                }}
                            >
                                {this.renderRubbers()}
                            </select>
                            <li>Weight: 1.5g</li>
                            <li>Speed: {selectedBackhand.r_speed}</li>
                            <li>Control: {selectedBackhand.r_control}</li>
                        </div>
                        <div>
                            <li />
                        </div>
                    </form>
                    <div className="score-div" />
                </div>
            </>
        );
    }
}

export default Paddle;
