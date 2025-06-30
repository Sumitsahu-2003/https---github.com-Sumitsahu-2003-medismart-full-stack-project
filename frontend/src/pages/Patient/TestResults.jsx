import React, { useState } from 'react';
import imagess from '../../assets/testResultsTop.jpg';
import './TestResults.css';

const TestResults = () => {
  const [reports] = useState([
    { id: 1, name: 'Blood Test Report', date: '2023-05-15' },
    { id: 2, name: 'X-Ray Report', date: '2023-04-22' },
    { id: 3, name: 'ECG Report', date: '2023-03-10' },
  ]);

  return (
    <div className="test-results-page">
      <h1>Test Results</h1>
      <div className="reports-list">
        {reports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-info">
              <h3>{report.name}</h3>
              <p>Date: {report.date}</p>
            </div>
            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResults;
