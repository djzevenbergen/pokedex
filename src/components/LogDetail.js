import React from "react";
import PropTypes from "prop-types";

function LogDetail(props) {
  const { log, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>Name: {log.name}</h3>
      <p>Kind: {log.kind}</p>
      <p>Level: {log.level}</p>
      <p>Location: {log.location}</p>
      <p>Description: {log.description}</p>
      <button onClick={props.onClickingEdit}>Update Entry</button>
      <button onClick={() => onClickingDelete(log.id)}>Delete Entry</button>
      <hr />
    </React.Fragment>
  );
}

LogDetail.propTypes = {
  log: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default LogDetail;