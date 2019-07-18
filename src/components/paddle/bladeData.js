import React from "react";
import PropTypes from "prop-types";

const BladeData = props => {
    const bladeLists = props.blades
        ? props.blades.map((blade, index) => {
              return (
                  <li key={index}>
                      <p>{blade.b_name}</p>
                      <p>{blade.b_speed}</p>
                      <p>{blade.b_control}</p>
                      <p>{blade.b_weight}</p>
                  </li>
              );
          })
        : null;

    return <>{bladeLists}</>;
};

export default BladeData;
