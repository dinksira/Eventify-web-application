import React from "react";

export default function Events() {
  const events = [
    { id: 1, name: "Corporate Conference" },
    { id: 2, name: "Music Festival" },
    { id: 3, name: "Wedding Party" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <ul className="space-y-2">
        {events.map(event => (
          <li key={event.id} className="border p-4 rounded shadow">
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
