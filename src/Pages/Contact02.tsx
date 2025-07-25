import React, { useState } from 'react';
import '../styles/style_contact.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // meta
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <br />
    <h1>Contact Us</h1>
    <br />
    <h2>Contact My Learning Platform - Let's Connect.</h2>
    <br />
    <h3 className='home-h3'>My Learning Platform  built with the goal of providing knowledge & skill development for those interested in tech careers.</h3>

    <p className='home-p2'>
      Have questions, ideas, or feedback? We'd love to hear from you. Whether you're exploring your first tech course, want to know more about our learning paths, 
      or simply need guidance on where to start — we're here to support your learning journey.
    </p>
    <br />
      <div className="container-contact">
        <div className="content">
          <div className="col-1">
            <div className="address-line">
              <img alt="location" src="https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-website-icon/address-81.png" className="icon" />
              <div className="contact-info">
                <div className="contact-info-title">Address</div>
                <div>999/9 Rama I Road,</div>
                <div>athum Wan, Bangkok</div>
                <div>10330, Thailand.</div>
              </div>
            </div>
            <div className="address-line">
              <img alt="phone" src="https://marketplace.canva.com/upyr4/MAFN-yupyr4/1/tl/canva-phone-icon-MAFN-yupyr4.png" className="icon" />
              <div className="contact-info">
                <div className="contact-info-title">Phone</div>
                <div>02-000-0000.</div>
              </div>
            </div>
            <div className="address-line">
              <img alt="email" src="https://cdn-icons-png.flaticon.com/512/542/542638.png" className="icon" />
              <div className="contact-info">
                <div className="contact-info-title">Email</div>
                <div>contactemail@gmail.com</div>
              </div>
            </div>
          </div>
          <br />
          <div className="col-2">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <h2 className='head_form'>Send Message</h2>
                <div className="form-row">
                  <label className='head2_form'>Full Name</label>
                  <div>
                    <input
                      type="text"
                      className="form-field"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className='head2_form'>Email</label>
                  <div>
                    <input
                      type="email"
                      className="form-field"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className='head2_form'>Type your message...</label>
                  <div>
                    <input
                      type="text"
                      className="form-field"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <input type="submit" className="send-btn" value="Send" />
              </div>
            </form>
          </div>
        </div>

        <br />
        <br />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.064407522568!2d100.52833357350555!3d13.747721065388088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecfc2f455e1%3A0xc4ad0280d8906604!2z4LmA4LiL4LmH4LiZ4LiX4Lij4Lix4Lil4LmA4Lin4Li04Lil4LiU4LmM!5e0!3m2!1sth!2sth!4v1753156686008!5m2!1sth!2sth"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
