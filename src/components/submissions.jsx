import React from 'react';
import { useNavigate } from 'react-router-dom';

function Submissions() {
  const navigate = useNavigate();
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

  return (
    <div className="result-container">
      <h2>📋 All Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="submissions-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.gender}</td>
                <td>{entry.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
}

export default Submissions;
