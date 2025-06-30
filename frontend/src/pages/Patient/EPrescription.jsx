import React, { useState } from 'react';

const EPrescription = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic
    console.log('Uploading file:', file);
    alert('Prescription uploaded successfully!');
  };

  return (
    <div className="eprescription-page">
      <h1>E-Prescription</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="file-upload">
          <label htmlFor="prescription">Upload Prescription:  </label>
          <input 
            type="file" 
            id="prescription" 
            accept=".pdf,.jpg,.png" 
            onChange={handleFileChange} 
            required 
          />
        </div>
        <button type="submit" className="upload-btns">Upload</button>
      </form>
    </div>
  );
};

export default EPrescription;
