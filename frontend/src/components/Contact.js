import "./Contact.css";
import React from "react";
import { Nav } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <p className="heading">Contact us!</p>
      <form>
        <label>Your Name</label>
        <input
          type="text"
          id="name"
          className="name"
          placeholder="Your name....."
          className="form-input"
        />
        <label>Email</label>
        <input
          className="email"
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          className="form-input"
        />
        <label>Message</label>
        <textarea
          className="message"
          id="subject"
          name="subject"
          placeholder="Write your message....."
        ></textarea>
        <center>
          <input className="submit" type="submit" value="Submit" />
        </center>
      </form>
    </div>
  );
}

export default Contact;
