import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form
        className="contact-form"
        action="https://formsubmit.co/amaladinusha@gmail.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;