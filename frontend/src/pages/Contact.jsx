import React, { useState } from "react";
import ContactPicture from "../assets/contactpicture.jpg";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactPicture})` }}
      />
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
