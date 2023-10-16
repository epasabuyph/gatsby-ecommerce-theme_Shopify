import React from "react"

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>E-Hailing Service</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
    <div id="content">{children}</div>
    <footer>
      <p>&copy; {new Date().getFullYear} E-Hailing Service</p>
    </footer>
  </div>
)

export default Layout
