import { EventInput } from "@fullcalendar/core";
import { store } from "../store";

let eventGuid = 0;

const allCalendarData = store.getState().calendar.calendarData;
const user = store.getState().user.user;

const filteredCalendar = allCalendarData.filter(
  (item) => item.email === user.userEmail
);

export const INITIAL_EVENTS: EventInput[] = filteredCalendar;
export function createEventId() {
  return String(eventGuid++);
}
