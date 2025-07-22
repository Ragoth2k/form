import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('submissions');
    if (savedData) {
      setSubmissions(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('submissions', JSON.stringify(submissions));
  }, [submissions]);

  const handleFormSubmit = (data) => {
    if (editIndex !== null) {
      const updated = [...submissions];
      updated[editIndex] = data;
      setSubmissions(updated);
      setEditIndex(null);
    } else {
      setSubmissions([...submissions, data]);
    }
    navigate('/');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/form');
  };

  const handleDelete = (index) => {
    const updated = submissions.filter((_, i) => i !== index);
    setSubmissions(updated);
  };

  const filteredData = submissions.filter((item) =>
    Object.values(item).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 style={{ marginBottom: '20px' }}>Submitted Personal Information</h2>

              <div className="action-bar">
                <button className="add-btn" onClick={() => navigate('/form')}>
                  ➕ Add New Entry
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="🔍 Search by name, email, etc..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {filteredData.length === 0 ? (
                <p>No matching submissions found.</p>
              ) : (
                <Table
                  data={filteredData}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </>
          }
        />
        <Route
          path="/form"
          element={
            <Form
              onSubmit={handleFormSubmit}
              initialData={editIndex !== null ? submissions[editIndex] : null}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
