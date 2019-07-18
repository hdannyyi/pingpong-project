import React from "react";
import PropTypes from "prop-types";

const BladeData = props => {
    const { bladeData } = props;
    return (
        <>
            <h1>{bladeData.b_name}</h1>
            <ul>
                <li>{bladeData.b_speed}</li>
                <li>{bladeData.b_control}</li>
                <li>{bladeData.b_weight}</li>
            </ul>
        </>
    );
};

export default BladeData;
