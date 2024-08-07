import React from 'react';
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to HealthCare Plus</h1>
        <p>Your Partner in Modern Healthcare Management</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <img src="https://placeimg.com/300/200/tech" alt="Patient Management" />
          <h2>Patient Management</h2>
          <p>Efficiently manage patient records and appointments</p>
        </div>
        <div className="feature-card">
          <img src="https://placeimg.com/300/200/tech" alt="Analytics Dashboard" />
          <h2>Analytics Dashboard</h2>
          <p>Get insights with our powerful analytics tools</p>
        </div>
        <div className="feature-card">
          <img src="https://placeimg.com/300/200/tech" alt="Secure Data" />
          <h2>Secure Data</h2>
          <p>Your data is protected with state-of-the-art security</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Healthcare Practice?</h2>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"HealthCare Plus has revolutionized our patient management system!"</p>
          - Dr. Jane Smith, General Practitioner
        </div>
        <div className="testimonial-card">
          <p>"The analytics dashboard has given us valuable insights into our practice."</p>
          - John Doe, Hospital Administrator
        </div>
      </section>
    </div>
  );
}