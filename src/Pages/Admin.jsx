import React, { useState } from 'react';
import './Admin.css';

export default function Admin({ details, setDetails }) {
    const [Gender, setGender] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        const newDetail = {
            name: formData.get('name'),
            age: formData.get('age'),
            gender: Gender,
            city: formData.get('city'),
            symptoms: formData.get('symptoms'),
            disease: formData.get('disease')
        };

        setDetails([...details, newDetail]);
        console.log(details);

        // Clear the form
        form.reset();
        setGender('');  // Reset gender state
    }

    return (
        <div className='admin'>
            <h2>Patient Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div onChange={(e) => setGender(e.target.value)}>
                        <input type="radio" id="male" name="gender" value="Male" required />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" required />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="Other" required />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required />
                </div>

                <div className="form-group">
                    <label htmlFor="symptoms">Symptoms:</label>
                    <input type="text" id="symptoms" name="symptoms" required />
                </div>

                <div className="form-group">
                    <label htmlFor="disease">Disease:</label>
                    <select id="disease" name="disease" required>
                        <option value="">Select a disease</option>
                        <option value="Common Cold">Common Cold</option>
                        <option value="Influenza">Influenza</option>
                        <option value="COVID-19">COVID-19</option>
                        <option value="Allergy">Allergy</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}
