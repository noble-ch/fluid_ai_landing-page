// Preloader.js
import React from 'react';
import './Preloader.css'; // Create your spinner styles here

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      {/* You can customize the spinner */}
    </div>
  );
};

export default Preloader;
