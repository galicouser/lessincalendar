import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  // Create an example event
  const myEventsList = [{
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2023, 10, 0),
    end: new Date(2023, 10, 0)
  }];

  return (
    <div style={{ height: '500px', margin: '50px' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default CalendarPage;
