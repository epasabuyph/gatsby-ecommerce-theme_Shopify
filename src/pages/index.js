import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Book a Ride</h1>
    <p>Enter your details below to book a ride.</p>
    <form action="/book-ride" method="post">
      <label htmlFor="pickup">Pickup Location</label>
      <input type="text" id="pickup" name="pickup" required />

      <label htmlFor="destination">Destination</label>
      <input type="text" id="destination" name="destination" required />

      <label htmlFor="date">Date</label>
      <input type="date" id="date" name="date" required />

      <label htmlFor="time">Time</label>
      <input type="time" id="time" name="time" required />

      <label htmlFor="passengers">Number of Passengers</label>
      <input type="number" id="passengers" name="passengers" min="1" required />

      <button type="submit">Book Now</button>
    </form>
  </Layout>
)

export default IndexPage
