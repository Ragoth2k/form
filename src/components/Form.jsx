import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    country: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, gender, country } = formData;

    if (!name || !email || !phone || !gender || !country) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('submissions')) || [];
    localStorage.setItem('submissions', JSON.stringify([...existing, formData]));

    const query = new URLSearchParams(formData).toString();
    navigate(`/result?${query}`);
    setFormData({ name: '', email: '', phone: '', gender: '', country: '' });
  };

  return (
    <div className="form-container">
      <h2>🚀 Personal Details Form </h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
