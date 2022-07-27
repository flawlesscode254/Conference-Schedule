import React from 'react'

import EventCard from '../components/EventCard'

import EventOne from "../assets/event_one.jpg"

const Conferences = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    }}>
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
      <EventCard image={EventOne} />
    </div>
  )
}

export default Conferences