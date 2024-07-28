import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarContainer } from '../styled/CalendarStyles';
import NewEventForm from '../components/NewEventForm';
import EventDetailsDialog from '../components/EventDetailsDialog';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onAddEvent }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    // Debugging: Log the event object selected
    console.log('Selected event:', event);
    // Ensure the event object has necessary properties
    if (event && event.title && event.start && event.end) {
      setSelectedEvent(event);
    } else {
      console.error('Invalid event selected:', event);
      setSelectedEvent(null);
    }
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <NewEventForm onSave={onAddEvent} />
      <CalendarContainer>
        <Calendar
          localizer={localizer}
          events={events}
          onSelectEvent={handleSelectEvent}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: '100%' }}
          views={['month', 'week', 'day', 'agenda']}
        />
        {selectedEvent && (
          <EventDetailsDialog
            event={selectedEvent}
            onClose={handleClose}
          />
        )}
      </CalendarContainer>
    </>
  );
};

export default MyCalendar;
