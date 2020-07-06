import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditLogForm(props) {
  const { log } = props;

  function handleEditLogFormSubmission(event) {
    event.preventDefault();
    props.onEditLog({ name: event.target.name.value, location: event.target.location.value, kind: event.target.kind.value, description: event.target.description.value, level: event.target.level.value, id: log.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditLogFormSubmission}
        buttonText="Update Log" />
    </React.Fragment>
  );
}

EditLogForm.propTypes = {
  onEditLog: PropTypes.func
}

export default EditLogForm;