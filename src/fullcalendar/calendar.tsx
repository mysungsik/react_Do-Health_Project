import React from "react";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId } from "./event-initial";
import { addCalendarToDb } from "../helper/calendar-add-to-DB"; // 내가 넣은 DB에 넣을 함수

interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
  textid: string; // 미리 state의 type 을 등록
  email: string; // 미리 state의 type 을 등록
  useEmail: string;
}

interface Props {
  calendarData: { title: string; start: string; email: string }[];
  getOut: () => void;
  isLogedIn: { idToken: string; email: string };
  dataFromCalendarForDelete: (id: string, email: string) => void;
}

export default class Calendar extends React.Component<Props, {}, DemoAppState> {
  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: [],
    textid: "", // state 사용을 위한 초기화
    email: "", // state 사용을 위한 초기화
    useEmail: this.props.isLogedIn.email,
  };

  render() {
    const calendarData = this.props.calendarData;
    const getOut = this.props.getOut;
    const isLogedIn = this.props.isLogedIn;
    const dataFromCalendarForDelete = this.props.dataFromCalendarForDelete;
    const { textid, email, useEmail } = this.state; // delete 버튼을 누르면, state 를 받아온다.

    if (!isLogedIn.email) {
      getOut();
    }

    if (textid) {
      dataFromCalendarForDelete(textid, email); // App.js 로 넘긴다.
    }

    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <h1 className="demo-app-title">식단 달력</h1>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            events={calendarData} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
          />
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("오늘 먹은 것은 무엇인가요? 하나씩 추가해주세요!");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      // 내가 넣는 함수 - DB 에 캘린터 값 넣기
      addCalendarToDb({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        email: this.state.useEmail,
      });
    }
  };

  handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        // window 를 앞에 붙였다.
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      this.setState({
        textid: clickInfo.event._def.publicId,
        email: clickInfo.event.extendedProps.email,
      });
    }
  };

  initializeState = () => {
    this.setState({
      textid: "",
      email: "",
    });
  };

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}
