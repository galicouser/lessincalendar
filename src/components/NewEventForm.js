import React, { useState } from 'react';

const NewEventForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const submitForm = (e) => {
    e.preventDefault();
    onSave({
      title,
      start,
      end,
      allDay: false
    });
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={start.toISOString().slice(0,16)}
        onChange={e => setStart(new Date(e.target.value))}
        required
      />
      <input
        type="datetime-local"
        value={end.toISOString().slice(0,16)}
        onChange={e => setEnd(new Date(e.target.value))}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default NewEventForm;
