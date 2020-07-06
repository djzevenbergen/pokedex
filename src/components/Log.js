import React from "react";
import PropTypes from "prop-types";

function Log(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenLogClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        {/* - Type: {props.type} */}
        {/* <p><em>Level: {props.level}</em></p>
        <p><em>Location: {props.location} </em></p>
        <p><em>Description: {props.description} </em></p> */}
        <hr />
      </div>
    </React.Fragment>
  );
}

Log.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number,
  location: PropTypes.string,
  kind: PropTypes.string,
  id: PropTypes.string,
  whenLogClicked: PropTypes.func
};


export default Log;