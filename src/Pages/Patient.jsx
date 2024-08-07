import React, { useState } from "react";
import "./Patient.css";
import { Link } from "react-router-dom";

export default function Patient({ details ,setSelectedPatient}) {


  let [Disease, setDisease] = useState("all");
  let [filteredDetails, setFilteredDetails] = useState(details);

  function handleSideBar(e){
    setDisease(e.target.value);

    console.log(e.target.value)
   
    if (e.target.value == "All")
    {
      setFilteredDetails(details);
    }
    else{
      setFilteredDetails(details.filter((e)=>e.disease == Disease))

    }
  }

  return (
    <div className="patient">
      <h2>Patient Records</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search by name, city, or disease..." />
      </div>

      <aside className="SideBar">
        <select onChange={(e)=>handleSideBar(e)} id="disease" name="disease">
          <option>All</option>
          <option>Common Cold</option>
          <option>Influenza</option>
          <option>COVID-19</option>
          <option>Allergy</option>
          <option>Other</option>
        </select>
      </aside>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Symptoms</th>
              <th>Disease</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetails.map((patient, index) => (
              <tr key={index}>
                <td colSpan="6"> 
                  <Link 
                    to="PatientDetails" 
                    onClick={() => setSelectedPatient(patient)}
                    className="patient-link"
                  >
                    <div className="patient-row">
                      <span>{patient.name}</span>
                      <span>{patient.age}</span>
                      <span>{patient.gender}</span>
                      <span>{patient.city}</span>
                      <span>{patient.symptoms}</span>
                      <span>{patient.disease}</span>
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="patient-summary">
        <h3>Summary</h3>

        <p>{details.length}</p>
      </div>
    </div>
  );
}
