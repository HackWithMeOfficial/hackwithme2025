import React from "react";
import "./Schedule.css";

const scheduleData = [
  {
    day: "Day 1: Saturday, August 16",
    events: [
      { time: "08:30 AM", activity: "Arrival & Registration" },
      { time: "09:30 AM", activity: "Opening Ceremony" },
      { time: "10:00 AM", activity: "Breakfast" },
      { time: "11:00 AM", activity: "Keynote Speech" },
      { time: "12:00 PM", activity: "Hacking Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM", activity: "Workshop #1" },
      { time: "02:40 PM", activity: "Photo Session" },
      { time: "03:00 PM", activity: "Hacking Continues" },
      { time: "06:00 PM", activity: "Dinner & Networking" },
      { time: "07:00 PM", activity: "Evening Hacking" },
      { time: "09:00 PM", activity: "Day 1 Closing" },
    ],
  },
  {
    day: "Day 2: Sunday, August 17",
    events: [
      { time: "08:30 AM", activity: "Morning Check-in" },
      { time: "09:30 AM", activity: "Breakfast" },
      { time: "10:30 AM", activity: "Workshop #2" },
      { time: "11:10 AM", activity: "Hacking Continues" },
      { time: "01:10 PM", activity: "Lunch" },
      { time: "02:10 PM", activity: "Final Hacking Session" },
      { time: "04:00 PM", activity: "Team Presentations" },
      { time: "07:00 PM", activity: "Judging Period" },
      { time: "08:00 PM", activity: "Award Ceremony" },
      { time: "09:00 PM", activity: "Closing Ceremony" },
    ],
  },
];

const Schedule = () => {
  return (
    <section className="schedule-container" id="schedule">
      <h2 className="schedule-title">Schedule</h2>
      {scheduleData.map((day, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">{day.day}</h3>
          <table className="event-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {day.events.map((event, idx) => (
                <tr key={idx}>
                  <td>{event.time}</td>
                  <td>{event.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};

export default Schedule;
