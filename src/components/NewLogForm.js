import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewLogForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewLogFormSubmission}
        buttonText="Submit Pokemans" />
    </React.Fragment>
  );
  function handleNewLogFormSubmission(event) {
    event.preventDefault();
    props.onNewLogCreation({ name: event.target.name.value, location: event.target.location.value, kind: event.target.kind.value, level: event.target.level.value, description: event.target.description.value, id: v4() });
  }
}
NewLogForm.propTypes = {
  onNewLogCreation: PropTypes.func
};

export default NewLogForm;