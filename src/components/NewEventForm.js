import React from 'react';
import { DialogOverlay, DialogBox } from '../styled/EventDetailsStyles';

const EventDetailsDialog = ({ event, onClose }) => {
  return (
    <DialogOverlay onClick={onClose}>
      <DialogBox onClick={(e) => e.stopPropagation()}>
        <h2>{event.title}</h2>
        <p><strong>Start:</strong> {new Date(event.start).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(event.end).toLocaleString()}</p>
        <button onClick={onClose}>Close</button>
      </DialogBox>
    </DialogOverlay>
  );
};

export default EventDetailsDialog;
