import React, { useState } from 'react';
import './WaitlistForm.css'; 
import backgroundImage from './Join Waitlist.png';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email); 
  };

  return (
    <div 
      className="waitlist-form-container"
    >
      <div className="form-content">
        <h1 className="form-title">Join the Fluid AI Waitlist Today!</h1>
        <form onSubmit={handleSubmit} className="waitlist-form">
          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder='Name'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder='Email'
            />
          </div>
          <div className="form-group country-select">
            <label htmlFor="country">Country</label>
            <select id="country" required> 
              <option  value="UAE">🇦🇪 United Arab Emirates</option>
              {/* ... Add more countries ... */}
            </select>
          </div>
          <button type="submit" className="join-button">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

export default WaitlistForm;