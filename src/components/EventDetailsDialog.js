import React from 'react';
import { DialogOverlay, DialogBox } from '../styled/EventDetailsStyles';

const EventDetailsDialog = ({ event, onClose }) => {
  if (!event) {
    return null; // No event, nothing to show
  }

  // Ensure all required properties are present before accessing them
  const { title, start, end } = event;
  if (!title || !start || !end) {
    console.error('Incomplete event data:', event);
    return null;
  }

  return (
    <DialogOverlay onClick={onClose}>
      <DialogBox onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p><strong>Start:</strong> {new Date(start).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(end).toLocaleString()}</p>
        <button onClick={onClose}>Close</button>
      </DialogBox>
    </DialogOverlay>
  );
};

export default EventDetailsDialog;
