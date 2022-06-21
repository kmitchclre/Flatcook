import React from 'react'

function ContactUs() {
  return (
    <div className="contact">
    <p className="heading">Get in touch</p>
    <form>
        <label>Your Name</label>
        <input
            type="text"
            id="name"
            className="name"
            placeholder="Your name....."
        />

        <label>Email</label>
        <input
            className="email"
            type="email"
            id="email"
            name="email"
            placeholder="Your email..."
        />
        <label>Message</label>
        <textarea
            className="message"
            id="subject"
            name="subject"
            placeholder="Write your message....."
        ></textarea>
        <center>
            <input className="Submit" type="submit" value="submit" />
        </center>
    </form>
    </div>
  );
}

export default ContactUs