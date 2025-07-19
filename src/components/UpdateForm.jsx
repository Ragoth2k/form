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

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

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

    const query = new URLSearchParams(formData).toString();
    navigate(`/result?${query}`);
    setFormData({ name: '', email: '', phone: '', gender: '', country: '' });
  };

  return (
    <div className="form-container">
      <h2>🚀 Enter Your Details</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
