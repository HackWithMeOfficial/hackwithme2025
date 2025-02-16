import React from "react";
import "./Schedule.css";
import { FaClock } from "react-icons/fa";

const scheduleData = [
  {
    day: "August 16, 2025",
    events: [
      { time: "8:30am - 9:00am", title: "Registration & Check-In " },
      { time: "9:00am - 10:00am", title: "Opening Remarks & Welcome" },
      { time: "10:00am - 11:00am", title: "Breakfast" },
      { time: "11:00am", title: "Hackathon Kickoff" },
      { time: "11:00am - 10:30am", title: "Team Formation" },
      { time: "11:30am - 12:30pm", title: "Figma Workshop" },
      { time: "12:30pm - 1:30pm", title: "GitHub Essentials" },
      { time: "1:30pm - 2:30pm", title: "Lunch Break" },
      { time: "2:30pm - 3:00pm", title: "Team Ideation" },
      { time: "3:00pm - 4:00pm", title: "Coding Session 1" },
      { time: "4:00pm - 5:30pm", title: "Photo Ops & Networking Break" },
      { time: "5:30pm - 6:30pm", title: "Coding Session 2" },
      { time: "6:30pm - 7:30pm", title: "Dinner Break" },
      { time: "7:30pm - 8:30pm", title: "Day 1 Wrap-Up & Ticket Distribution" },
    ],
  },
  {
    day: "August 17, 2025",
    events: [
      { time: "10:00am - 10:30am", title: "Check In" },
      { time: "10:30am - 11:30am", title: "Breakfast" },
      { time: "11:30am - 1:00pm", title: "Lightning Talks" },
      { time: "1:00pm - 2:00pm", title: "Lunch Break" },
      { time: "2:00pm - 2:30pm", title: "Photo Session & Relaxing" },
      { time: "2:30pm - 4:30pm", title: "Coding Session 3" },
      { time: "4:30pm - 6:30pm", title: "Team Presentations" },
      { time: "6:30pm - 7:00pm", title: "Judging Panel & Deliberation" },
      { time: "7:00pm - 8:00pm", title: "Award Ceremony" },
      { time: "8:30pm - 9:00pm", title: "Closing Remarks & Ticket Distribution" },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container" id="schedule">
      <h2 className="schedule-title">Schedule</h2>
      {scheduleData.map((day, index) => (
        <div key={index} className="schedule-day">
          <h3 className="day-title">{day.day}</h3>
          <div className="schedule-grid">
            {day.events.map((event, idx) => (
              <div key={idx} className="schedule-item">
                <FaClock className="clock-icon" />
                <div className="schedule-details">
                  <p className="event-time">{event.time}</p>
                  <p className="event-title">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
