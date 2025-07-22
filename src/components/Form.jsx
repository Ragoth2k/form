import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Details' : 'Add Personal Details'}</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input name="dob" type="date" value={formData.dob} onChange={handleChange} required />
      <button type="submit">{initialData ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default Form;
