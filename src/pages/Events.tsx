"use client";

import React from "react";
import { Calendar, MapPin, Users, Clock, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EVENTS = [
  {
    id: 1,
    title: "Tech Leadership Summit",
    date: "2026-02-15",
    location: "San Francisco Convention Center",
    attendees: 1200,
    category: "Conference",
    status: "upcoming" as const,
  },
  {
    id: 2,
    title: "Summer Music Festival",
    date: "2026-07-20",
    location: "Central Park, NYC",
    attendees: 50000,
    category: "Music",
    status: "upcoming" as const,
  },
  {
    id: 3,
    title: "Exclusive Wedding Gala",
    date: "2026-05-10",
    location: "The Plaza Hotel",
    attendees: 250,
    category: "Wedding",
    status: "booked" as const,
  },
] as const;

type Event = typeof EVENTS[number];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterCategory, setFilterCategory] = React.useState<string>("");

  const filteredEvents = EVENTS.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filterCategory || event.category === filterCategory)
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent mb-4">
          Upcoming Events
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our curated selection of corporate conferences, festivals, and private celebrations.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-4 items-center justify-center max-w-2xl mx-auto">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={() => setFilterCategory("")}>
          All Categories
        </Button>
        {["Conference", "Music", "Wedding"].map(cat => (
          <Badge 
            key={cat}
            variant={filterCategory === cat ? "default" : "secondary"}
            className="cursor-pointer hover:opacity-80 px-3 py-1"
            onClick={() => setFilterCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="col-span-full text-center py-24">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">No events found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">{event.category}</Badge>
          <Badge variant={event.status === "upcoming" ? "default" : "outline"} className="text-xs">
            {event.status.toUpperCase()}
          </Badge>
        </div>
        <CardTitle className="group-hover:text-teal-600 transition-colors font-bold text-xl line-clamp-2">
          {event.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-0">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{event.attendees.toLocaleString()} attendees</span>
          </div>
        </div>
        
        <Button className="w-full mt-2 group-hover:bg-teal-600">
          View Details
          <Clock className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Events;
