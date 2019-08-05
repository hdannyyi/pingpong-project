import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Dashboard extends Component {
    state = {
        paddles: []
    };

    renderDashboardList() {
        let paddleList = JSON.parse(localStorage.getItem("my-paddles")) || [];
        return paddleList.map((paddle, i) => {
            return (
                <>
                    <ul className="saved-paddle">
                        <ul key={i}>
                            <li>{paddle.selectedForehand.r_name}</li>
                            <li>
                                <img src={paddle.selectedForehand.thumbnail} />
                            </li>
                            <li>Weight: 1.5g</li>
                            <li>Speed: {paddle.selectedForehand.r_speed}</li>
                            <li>
                                Control: {paddle.selectedForehand.r_control}
                            </li>
                        </ul>
                        <ul>
                            <li>{paddle.selectedBlade.b_name}</li>
                            <li>
                                <img src={paddle.selectedBlade.b_image} />
                            </li>
                            <li>Weight: {paddle.selectedBlade.b_weight}</li>
                            <li>Speed: {paddle.selectedBlade.b_speed}</li>
                            <li>Control: {paddle.selectedBlade.b_control}</li>
                        </ul>
                        <ul>
                            <li>{paddle.selectedBackhand.r_name}</li>
                            <li>
                                <img src={paddle.selectedBackhand.thumbnail} />
                            </li>
                            <li>Weight: 1.5g</li>
                            <li>Speed: {paddle.selectedBackhand.r_speed}</li>
                            <li>
                                Control: {paddle.selectedBackhand.r_control}
                            </li>
                        </ul>
                        <Link
                            to={{
                                pathname: "/compare",
                                state: {
                                    paddle: paddle
                                }
                            }}
                        >
                            <button>Select</button>
                        </Link>
                    </ul>
                </>
            );
        });
    }

    render() {
        return (
            <div className="paddle-wrapper">{this.renderDashboardList()}</div>
        );
    }
}

export default Dashboard;
