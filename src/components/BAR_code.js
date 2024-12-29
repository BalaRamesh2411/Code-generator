import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barcode from 'react-barcode';

function BarcodeGenerator() {
  const [inputText, setInputText] = useState({ name: '', email: '', gender: '' });
  const [regNo, setRegNo] = useState('');

  const generateRegNo = () => {
    const { name, email, gender } = inputText;

    if (!name || !email || !gender) {
      alert('Please enter valid data in all fields');
      return;
    }
    const randomDigits = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    setRegNo(randomDigits);
  };

 
  return (
    <div className="container">
      <h1 className="text-center my-4">BAR CODE GENERATOR</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={inputText.name}
            onChange={(e) => setInputText({ ...inputText, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Id:</label>
          <input
            type="email"
            className="form-control"
            value={inputText.email}
            onChange={(e) => setInputText({ ...inputText, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            className="form-select"
            value={inputText.gender}
            onChange={(e) => setInputText({ ...inputText, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button type="button" className="btn btn-primary" onClick={generateRegNo}>
            Generate Reg No
          </button>
        </div>
      </form>
      {regNo && (
        <div className="mt-4 text-center">
          <h2>Generated Reg No: {regNo}</h2>
          <div className="mt-3">
            <Barcode value={regNo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BarcodeGenerator;




// NOTES:-
// 1]The error occurs because the react-barcode package requires a peer dependency of React version ^16.0.0 || ^17.0.0 || ^18.0.0, 
// but your project is using React 19.0.0, which is incompatible.
// 2]Steps to Resolve the Issue:-
//   A]npm install react@18 react-dom@18
//   B]npm install --legacy-peer-deps
//   C]npm info react-barcode
//   D]npm cache clean --force
//     npm install
//   E]After this steps complected to final step:- npm install react-barcode
 
