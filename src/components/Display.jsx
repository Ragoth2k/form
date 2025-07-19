import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Display() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);

  const name = params.get('name');
  const email = params.get('email');
  const phone = params.get('phone');
  const gender = params.get('gender');
  const country = params.get('country');

  return (
    <div className="result-container">
      <h2>🎉 Submission Successful</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Country:</strong> {country}</p>
      <button onClick={() => navigate('/')}>Back to Form</button>
      <button onClick={() => navigate('/submissions')}>View All Submissions</button>
    </div>
  );
}

export default Display;
