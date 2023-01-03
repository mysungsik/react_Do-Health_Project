import { EventInput } from "@fullcalendar/core";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [

  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
    email: "test@test.com",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
    email: "test@test.com",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
