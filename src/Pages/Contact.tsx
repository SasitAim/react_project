import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* ✅ ย่อหน้าอธิบายเพจ */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or need more information, feel free to reach out.
          Our team will respond as soon as possible.
        </p>
      </section>

      {/* ✅ Address Table */}
      <section className="contact-section">
        <h3>Our Address</h3>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>Address:</td>
              <td>123 Sukhumvit Rd, Klongtoey, Bangkok 10110</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>02-123-4567</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>contact@example.com</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ✅ Google Map Embed */}
      <section className="contact-section">
        <h3>Find Us on the Map</h3>
        <div className="map-container">
          <iframe
            title="Company Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6730641009644!2d100.56151031525086!3d13.73757920114608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f11b4b3d3f5%3A0xfaa06f2e2d2d32f3!2sSukhumvit%20Rd!5e0!3m2!1sen!2sth!4v1616441541123!5m2!1sen!2sth"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ✅ Contact Form */}
      <section>
        <h3>Send Us a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-section">
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-section">
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-section">
            <label htmlFor="message">Message:</label><br />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;

