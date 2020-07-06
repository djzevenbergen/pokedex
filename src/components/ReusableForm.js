import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Poke Name' />
        <input
          type='text'
          name='kind'
          placeholder='Kind' />
        <input
          type='number'
          name='level'
          placeholder='Level' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          type='text'
          name='description'
          placeholder='Describe your encounter' />
        <button type='submit'>{props.buttonText}</button>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;