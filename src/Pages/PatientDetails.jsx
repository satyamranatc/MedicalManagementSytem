import React from 'react'
import './PatientDetails.css'

export default function PatientDetails({ details }) {
  const patient = details[0];

  return (
    <div className='patient-details'>
      <div id="patient-showcase">
        <div id="picture">
          <img src="https://voice.ons.org/sites/default/files/2018-12/1000_iStock-481073846.jpg" alt={patient.name} />
        </div>
        <div id="details">
          <h2>{patient.name}</h2>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>City:</strong> {patient.city}</p>
          <p><strong>Symptoms:</strong> {patient.symptoms}</p>
          <p><strong>Disease:</strong> {patient.disease}</p>
        </div>
      </div>

      <div className="medical-history">
        <h3>Medical History</h3>
        <ul>
          <li>Previous visit: 3 months ago</li>
          <li>Allergies: Penicillin</li>
          <li>Chronic conditions: None</li>
        </ul>
      </div>

      <div className="treatment-plan">
        <h3>Treatment Plan</h3>
        <p>Current medication: Amoxicillin 500mg, twice daily for 7 days</p>
        <p>Next appointment: 2 weeks from today</p>
      </div>

      <div className="actions">
        <button className="edit-btn">Edit Patient Info</button>
        <button className="schedule-btn">Schedule Appointment</button>
      </div>
    </div>
  )
}