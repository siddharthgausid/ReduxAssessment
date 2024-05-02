import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from './actions';

const FormComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    highestEducation: '',
    passingYear: '2020',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData)); // Dispatch the action with form data
    setFormData({
      fullName: '',
      address: '',
      postalCode: '',
      phoneNumber: '',
      highestEducation: '',
      passingYear: '2020',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange} // Use handleChange for input change
      />
      <br />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange} // Use handleChange for input change
      />
      <br />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={handleChange} // Use handleChange for input change
      />
      <br />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange} // Use handleChange for input change
      />
      <br />
      <input
        type="text"
        name="highestEducation"
        placeholder="Highest Education"
        value={formData.highestEducation}
        onChange={handleChange} // Use handleChange for input change
      />
      <br />
      <select name="passingYear" value={formData.passingYear} onChange={handleChange}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <br />
      <button type="submit">Submit</button>
      
    </form>
  );
};

export default FormComponent;
