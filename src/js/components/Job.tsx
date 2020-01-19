import React, { useState } from "react";

const Job = ({ id, client, date, onRemove, onChange, jobNumber }: any) => {
  const [editing, setEditing] = useState(false);

  let newClientName = React.createRef<HTMLInputElement>();
  let newDateInput = React.createRef<HTMLInputElement>();

  function edit() {
    setEditing(true);
  }

  function save() {
    onChange(newClientName.current.value, newDateInput.current.value, id);
    setEditing(false);
  }

  function remove() {
    onRemove(id);
  }

  function renderForm() {
    return (
      <div className="row job-form-row">
        <span className="small-4 medium-4 large-4 columns">
          <input type="text" ref={newClientName} defaultValue={client} />
        </span>
        <span className="small-4 medium-4 large-4 columns">
          <input type="text" ref={newDateInput} defaultValue={date} />
        </span>
        <span className="small-2 medium-2 large-2 columns">
          <button onClick={() => save()} className="success hollow button">
            Save
          </button>
        </span>
      </div>
    );
  }

  function renderDisplay() {
    return (
      <div className="row job-row">
        <span className="small-2 medium-2 large-2 columns text-wrapper">
          {jobNumber}
        </span>
        <span className="small-4 medium-4 large-4 columns text-wrapper">
          {client}
        </span>
        <span className="small-4 medium-4 large-4 columns text-wrapper">
          {date}
        </span>
        <span className="small-2 medium-2 large-2 columns">
          <button
            onClick={() => edit()}
            className="hollow button edit-job-button"
            type="button"
          >
            edit
          </button>
          <button
            onClick={() => remove()}
            className="alert  hollow button delete-job-button"
            type="button"
          >
            delete
          </button>
        </span>
      </div>
    );
  }

  return editing ? renderForm() : renderDisplay();
};

export default Job;
