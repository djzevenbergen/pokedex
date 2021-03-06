import React from 'react';
import Log from './Log';
import PropTypes from "prop-types";
import LogDetail from './LogDetail';


function LogList(props) {
  return (
    <React.Fragment>
      {Object.values(props.logList).map((log) => {
        return <Log
          whenLogClicked={props.onLogSelection}
          name={log.name}
          kind={log.kind}
          location={log.location}
          level={log.level}
          description={log.description}
          id={log.id}
          key={log.id} />
      })}
    </React.Fragment>
  );
}

LogList.propTypes = {
  logList: PropTypes.object,
  onLogSelection: PropTypes.func
};

export default LogList;