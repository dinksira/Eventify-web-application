// src/components/home/FeaturedEventsSection.jsx
import React from "react";
import EventCard from "./EventCard";

const events = [
  { title: "Tech Conference 2025", date: "Jan 20", location: "Addis Ababa", image: "/assets/corporate_conference.jpg" },
  { title: "Music Fest", date: "Feb 10", location: "Adama", image: "/assets/music_festival.jpg" },
  { title: "Luxury Wedding", date: "Mar 5", location: "Bahir Dar", image: "/assets/wedding.jpg" },
];

const FeaturedEventsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
