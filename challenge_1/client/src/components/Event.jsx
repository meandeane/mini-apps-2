import React from 'react';

const Event = (props) => (
  <div className="event-record">
    <div className="event-description">Description:{props.event.description}</div>
    <input type="button" name="edit" id={props.event.description} value="Edit" onClick={props.handleSubmit} />
    <input type="button" name="save" id={props.event} value="Save" onClick={props.handleSubmit} />
  </div>
)

export default Event;
