import React, { Component } from "react";
import "./styles.css";

class Paddle extends Component {
    state = {
        selectedForehand: this.props.rubbers.default[0] || "",
        selectedBlade: this.props.blades.default[0] || "",
        selectedBackhand: this.props.rubbers.default[0] || "",
        paddleToCompare: this.props.paddleToCompare
    };

    componentDidMount() {
        console.log("paddle:", this.state.paddleToCompare);
        this.setState(this.state.paddleToCompare);
    }

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
        const dataToSet = {};
        type === "Blade"
            ? (dataToSet[`selected${type}`] = this.props.blades.default.find(
                  x => x.b_name === e.target.value
              ))
            : (dataToSet[`selected${type}`] = this.props.rubbers.default.find(
                  x => x.r_name === e.target.value
              ));
        this.setState(dataToSet);
    };

    isItNa = value => {
        return isNaN(value) ? 0 : value;
    };

    calculateTotalWeight = () => {
        const { selectedBlade } = this.state;
        let totalWeight = 3 + this.isItNa(Number(selectedBlade.b_weight));

        return totalWeight;
    };

    calculateTotalSpeed = () => {
        const {
            selectedBlade,
            selectedForehand,
            selectedBackhand
        } = this.state;
        let totalSpeed =
            this.isItNa(Number(selectedBlade.b_speed)) +
            this.isItNa(Number(selectedForehand.r_speed)) +
            this.isItNa(Number(selectedBackhand.r_speed));

        return totalSpeed;
    };

    calculateTotalControl = () => {
        const {
            selectedBlade,
            selectedBackhand,
            selectedForehand
        } = this.state;
        let totalControl =
            this.isItNa(Number(selectedBlade.b_control)) +
            this.isItNa(Number(selectedForehand.r_control)) +
            this.isItNa(Number(selectedBackhand.r_control));

        return totalControl;
    };

    savePaddle = () => {
        let newPaddle = {
            selectedBlade: this.state.selectedBlade,
            selectedForehand: this.state.selectedForehand,
            selectedBackhand: this.state.selectedBackhand
        };
        let paddles = JSON.parse(localStorage.getItem("my-paddles")) || [];
        console.log("previous: ", paddles);
        paddles.push(newPaddle);
        localStorage.setItem("my-paddles", JSON.stringify(paddles));
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
                                <label>Forehand</label>
                            </div>

                            <select
                                type="text"
                                onChange={e => {
                                    this.handleInput(e, "Forehand");
                                }}
                            >
                                {this.renderRubbers()}
                            </select>
                            <li>
                                <img src={selectedForehand.thumbnail} />
                            </li>
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
                            <li>
                                <img src={selectedBlade.b_image} />
                            </li>
                            <li>Weight: {selectedBlade.b_weight}g</li>
                            <li>Speed: {selectedBlade.b_speed}</li>
                            <li>Control: {selectedBlade.b_control}</li>
                        </div>
                        <div className="data-view" id="backhand">
                            <div className="paddle-label">
                                <label>Backhand</label>
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
                            <li>
                                <img src={selectedBackhand.thumbnail} />
                            </li>
                            <li>Weight: 1.5g</li>
                            <li>Speed: {selectedBackhand.r_speed}</li>
                            <li>Control: {selectedBackhand.r_control}</li>
                        </div>
                        <div className="data-view">
                            <li>Total Ratings</li>
                            <li>Weight: {this.calculateTotalWeight()}g</li>
                            <li>Speed: {this.calculateTotalSpeed()}</li>
                            <li>Control: {this.calculateTotalControl()}</li>
                        </div>
                    </form>
                    <button onClick={this.savePaddle}>SAVE</button>
                    <div className="score-div" />
                </div>
            </>
        );
    }
}

export default Paddle;
