import React, { Component } from "react";
import BladeStats from "./bladeData";

class BladeLayout extends Component {
    state = {
        blades: []
    };

    componentDidMount() {
        const { blades } = this.props;
        this.setState({
            blades: blades.default
        });
    }

    loadBlade = blade => {
        this.setState({
            bladeData: blade
        });
    };

    render() {
        const blades = this.state;
        return (
            <>
                <BladeStats>
                    {blades.map((blade, index) => {
                        return (
                            <li key={index}>
                                <p>{blade.b_name}</p>
                                <p>{blade.b_speed}</p>
                                <p>{blade.b_control}</p>
                                <p>{blade.b_weight}</p>
                            </li>
                        );
                    })}
                </BladeStats>
            </>
        );
    }
}

export default BladeLayout;
