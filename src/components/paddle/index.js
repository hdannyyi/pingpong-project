import React, { Component } from "react";
import "./styles.css";

class Paddle extends Component {
    state = {
        selectedBlade: this.props.blades.default[0].b_name || "",
        selectedForehand: this.props.blades.default[0].r_name || "",
        selectedBackhand: this.props.blades.default[0].r_name || ""
    };

    renderBlades = () => {
        return this.props.blades.default.map((blade, i) => {
            return <option key={i}>{blade.b_name}</option>;
        });
    };

    renderRubbers = () => {
        return this.props.blades.default.map((blade, i) => {
            return <option key={i}>{blade.r_name}</option>;
        });
    };

    handleInput = (e, type) => {
        const dataToSet = {};
        dataToSet[`selected${type}`] = e.target.value;

        this.setState(dataToSet);
    };

    calculateScore = () => {
        let bladeScore = 0;
        const bladeObject = this.props.blades.default.find(
            blade => blade.b_name === this.state.selectedBlade
        );

        bladeScore += Number(bladeObject.b_control);
        bladeScore += Number(bladeObject.b_speed);
        bladeScore += Number(bladeObject.b_weight);
        return bladeScore;
    };

    render() {
        console.log(this.state);
        return (
            <>
                <div className="left-column">
                    <form>
                        <div>
                            <div className="paddle-label">
                                <label>FH</label>
                            </div>

                            <select
                                type="text"
                                onChange={e => {
                                    this.handleInput(e, "Forehand");
                                }}
                            >
                                {this.renderBlades()}
                            </select>
                        </div>
                        <div>
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
                        </div>
                        <div>
                            <div className="paddle-label">
                                <label>BH</label>
                            </div>
                            <select
                                type="text"
                                onChange={e => {
                                    this.handleInput(e, "Backhand");
                                }}
                            >
                                {this.renderBlades()}
                            </select>
                        </div>
                    </form>
                    <div className="score-div">
                        Score: {this.calculateScore()}
                    </div>
                </div>
            </>
        );
    }
}

export default Paddle;
