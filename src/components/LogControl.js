import React from "react";
import NewLogForm from "./NewLogForm";
import LogList from "./LogList";
import LogDetail from "./LogDetail";
import EditLogForm from './EditLogForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class LogControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      counter: 0,
      selectedLog: null,
      editing: false
    };
  }

  handleChangingSelectedLog = (id) => {
    const selectedLog = this.props.masterLogList[id];
    this.setState({ selectedLog: selectedLog });
  }

  handleAddingNewLogToList = (newLog) => {
    const { dispatch } = this.props;
    const { id, name, kind, location, level, description } = newLog;

    const action = {
      type: 'ADD_LOG',
      id: id,
      name: name,
      kind: kind,
      location: location,
      level: level,
      description: description,
    }
    dispatch(action);

    this.setState({
      counter: 0
    });
  }

  handleClick = () => {
    if (this.state.selectedLog != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedLog: null,
        editing: false
      });
    } else if (this.state.counter === 0) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        counter: 0
      }));
    }
  }

  handleEditingLogInList = (logToEdit) => {
    const { dispatch } = this.props;
    const { id, name, kind, location, level, description } = logToEdit;

    const action = {
      type: 'ADD_LOG',
      id: id,
      name: name,
      kind: kind,
      location: location,
      level: level,
      description: description,
    }

    dispatch(action);
    this.setState({
      editing: false,
      selectedLog: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleDeletingLog = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }

    dispatch(action);

    this.setState({
      selectedLog: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditLogForm log={this.state.selectedLog} onEditLog={this.handleEditingLogInList} />
      buttonText = "Return to Log List";
    }
    else if (this.state.selectedLog != null) {
      currentlyVisibleState =
        <LogDetail
          log={this.state.selectedLog}
          onClickingDelete={this.handleDeletingLog}
          onClickingEdit={this.handleEditClick}
        />
      buttonText = "Return to Log List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <LogList
          logList={this.props.masterLogList}
          onLogSelection={this.handleChangingSelectedLog}
        />
      buttonText = "Add Log!";
    } else if (this.state.counter === 1) {
      currentlyVisibleState =
        <NewLogForm
          onNewLogCreation={this.handleAddingNewLogToList}
        />
      buttonText = "Return to List";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

LogControl.propTypes = {
  masterLogList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterLogList: state
  }
}

// Note: we are now passing mapStateToProps into the connect() function.

LogControl = connect(mapStateToProps)(LogControl);

export default LogControl;