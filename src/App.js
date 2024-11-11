import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <br />
        <label>
          Province:
          <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} required />
        </label>
        <br />
        <label>
          Postal Code:
          <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Information:</h3>
          <p>Email: {email}</p>
          <p>Full Name: {fullName}</p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>Province: {province}</p>
          <p>Postal Code: {postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
