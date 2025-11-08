import React from "react";
import { motion } from "framer-motion";

// Reusable card for an event, using framer-motion
const EventCard = ({ title, date, description }) => (
  <motion.div
    className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h4 className="text-xl font-bold text-blue-300 mb-2">{title}</h4>
    <p className="text-sm text-gray-400 mb-3">{date}</p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function EventsSection() {
  // Placeholder data for your events
  const recentEvents = [
    { title: "Star-Gazing Night", date: "Next Friday", description: "Join us at the observatory for a look at the Orion Nebula." },
    { title: "Guest Lecture: Black Holes", date: "Dec 1st", description: "Dr. Eva Rostova discusses the latest in black hole research." },
  ];

  const pastEvents = [
    { title: "Perseid Meteor Shower Watch", date: "Aug 12th", description: "We had a great turnout for the annual Perseids." },
    { title: "Mars Rover Mission Update", date: "Jul 20th", description: "A review of the Perseverance rover's latest findings." },
  ];

  return (
    <motion.section
      id="events" // This ID matches your Navbar link
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-12 text-blue-400">Club Events</h2>
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* "Tab" 1: Recent & Upcoming Events */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center">Recent & Upcoming</h3>
          <div className="space-y-6">
            {recentEvents.map((event, index) => (
              <EventCard key={`recent-${index}`} {...event} />
            ))}
          </div>
        </div>

        {/* "Tab" 2: Past Events */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center">Past Events</h3>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <EventCard key={`past-${index}`} {...event} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}