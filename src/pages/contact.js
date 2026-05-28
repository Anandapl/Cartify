import React from 'react'


export default function Contact() {
  return (
    <div className="contact-wrap">
      <div className="contact-hero">
        <h1>Get in touch</h1>
        <p>We'd love to hear from you — fill out the form and we'll get back to you shortly.</p>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <div className="info-chip">
            <span className="icon">✉</span>
            <div><span>Email us</span><strong>cartify1999@gmail.com</strong></div>
          </div>
          <div className="info-chip">
            <span className="icon">📞</span>
            <div><span>Call us</span><strong>7200123410</strong></div>
          </div>
          <div className="info-chip">
            <span className="icon">🕐</span>
            <div><span>Hours</span><strong>Mon–Fri, 9–6</strong></div>
          </div>
        </div>

        <hr className="divider" />

        <div className="form-row">
          <div className="form-group">
            <label>Your name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="john@email.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="How can we help?" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Tell us more about your inquiry..." />
        </div>

        <button className="submit-btn">Send message</button>
      </div>
    </div>
  )
}