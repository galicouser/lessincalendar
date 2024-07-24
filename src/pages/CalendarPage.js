import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarContainer } from '../styled/CalendarStyles'; // Adjust path as necessary
import NewEventForm from '../components/NewEventForm'; // Updated import path

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const addNewEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <NewEventForm onSave={addNewEvent} />
      <CalendarContainer>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: '100%' }}
          views={['month', 'week', 'day', 'agenda']}
          step={60}
          showMultiDayTimes
        />
      </CalendarContainer>
    </div>
  );
};

export default MyCalendar;
