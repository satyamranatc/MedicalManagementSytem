import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from './Components/NavBar'

import Home from './Pages/Home'
import Patients from './Pages/Patient'
import PatientDetails from './Pages/PatientDetails'
import Admin from './Pages/Admin'



export default function App() {
  const [details, setDetails] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");

  return (
    <div>

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients details = {details} setSelectedPatient = {setSelectedPatient} />} />
          <Route path="/patients/PatientDetails" element={<PatientDetails details = {details} selectedPatient ={selectedPatient} />} />
          <Route path="/admin" element={<Admin details = {details} setDetails = {setDetails} />} />
        </Routes>
      
      
      
      </BrowserRouter>

    </div>
  )
}
