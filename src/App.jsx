import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import Submissions from './components/submissions';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Display />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </div>
  );
}

export default App;
