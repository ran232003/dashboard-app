import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";
import SendIcon from "@mui/icons-material/Send";
import RemoveIcon from "@mui/icons-material/Remove";
import "../Screens.css";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
const Calender = () => {
  const them = useTheme();
  const colors = tokens(them.palette.mode);
  const [events, setEvents] = useState([1]);
  const [cal, setClaneder] = useState();
  const handleDateClick = (selected) => {
    // when clicking on the calender, specific date:
    //{start: Wed Feb 08 2023 00:00:00 GMT+0200 (Israel Standard Time),
    // end: Thu Feb 09 2023 00:00:00 GMT+0200 (Israel Standard Time), startStr: '2023-02-08', endStr: '2023-02-09', allDay: true, …}
    //console.log(selected.view.calendar);
    //entering title from user
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    setClaneder(selected.view.calendar);
    calendarApi.unselect();
    if (title) {
      //adding the event to the calender
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        date: selected.startStr,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventSet = (event) => {
    // console.log(event);
    setEvents(event);
  };
  const handleRemove = (event) => {
    //remove from the list
    //console.log(event);
    event.remove();
    //console.log(cal.getEvents());
    //cal.remove();
  };
  const handleEventClick = (selected) => {
    //remove from calender
    //pop message if confirm return true else false
    const checkConfirm = window.confirm("remove this event?");
    if (checkConfirm) {
      selected.event.remove();
    }
    //
  };
  return (
    <div className="dashboardMain">
      <Header title="Calender" subTitle="Welcome to your dashboard" />
      <Box
        sx={{
          display: "flex",
          margin: "30px",
          justifyContent: "space-between",
        }}
      >
        {/*list events */}
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            textAlign: "center",
            flex: "1 1 20%",
          }}
        >
          <List>
            <h3>Events</h3>
            {events.map((event) => {
              return (
                <div>
                  <ListItem>
                    <ListItemIcon>
                      <RemoveIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          handleRemove(event);
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={event.title}
                      secondary={event.startStr}
                    />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </Box>
        {/* calender */}
        <Box
          sx={{
            flex: "1 1 100%",

            backgroundColor: colors.primary[400],
            marginLeft: "5px",
          }}
        >
          {/* dayGridPlugin = month view,
          timeGridPlugin = we can see days, weeks view 
          interactionPlugin: we can select date on the calender
          listPlugin: adding tab with all events that was added to the calender   */}
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            eventsSet={handleEventSet}
            selectable={true} // we can click on a date, with the select and handleDateClick() function. they are working toghetor
            selectMirror={true} //
            editable={true} // CAN drug and drop events from the calender
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventClick={handleEventClick}
            headerToolbar={{
              //headerToolbar: the menue in top
              left: "prev,next,today", //can move the calender to future or past
              center: "title", //text containing the current month/week/day
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", //adding month week day options in toolbar
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Calender;
