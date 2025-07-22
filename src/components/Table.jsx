import React from 'react';
import './Table.css';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Gender</th><th>DOB</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
            <td>{entry.phone}</td>
            <td>{entry.gender}</td>
            <td>{entry.dob}</td>
            <td>
  <button className="edit-btn" onClick={() => onEdit(index)}>
    ✏️ Edit
  </button>
  <button
    className="delete-btn"
    onClick={() => {
      if (window.confirm('Are you sure you want to delete this entry?')) {
        onDelete(index);
      }
    }}
  >
    🗑️ Delete
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
