import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import axios from "axios";

export const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => await axios.get("/api/tasks/1");

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <div>
      {console.log(`These are the events at the FullCalender prop`, events)}
      <FullCalendar
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[daygridPlugin, interactionPlugin]}
        editable
        selectable
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        height={"80vh"}
        events={events}
      />
      ;
    </div>
  );
};
