"use client"; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [emplacements, setEmplacements] = useState([]);
  const [selectedEmplacement, setSelectedEmplacement] = useState('');
  const [surface, setSurface] = useState('');
  const [pieces, setPieces] = useState('');
  const [chambres, setChambres] = useState('');
  const [bain, setbain] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmplacements = async () => {
      try {
        const response = await axios.get('http://localhost:8000/emplacements');
        setEmplacements(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching emplacements: ' + error.message);
        setLoading(false);
        console.error('Error fetching emplacements:', error.response || error.message);
      }
    };

    fetchEmplacements();
  }, []);

  const handleSubmit = async () => {
    const selectedEmplacementData = emplacements.find(emp => emp.emplacement === selectedEmplacement);
    const requestData = {
      surface: parseFloat(surface),
      pieces: parseInt(pieces, 10),
      chambres: parseInt(chambres, 10),
      bain: parseInt(bain, 10),
      emplacement: selectedEmplacementData ? selectedEmplacementData.id : null,
    };

    console.log('Sending request data:', requestData);

    try {
      const response = await axios.post('http://localhost:8000/predict/', requestData);
      setPredictedPrice(response.data['Prix prédit']);
    } catch (error) {
      console.error('Error predicting price:', error.response || error.message);
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>Real Estate Price Prediction</h1>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="emplacement" style={styles.label}>Emplacement</label>
            {loading ? (
              <p style={styles.message}>Loading emplacements...</p>
            ) : error ? (
              <p style={styles.message}>{error}</p>
            ) : (
              <select
                id="emplacement"
                value={selectedEmplacement}
                onChange={(e) => setSelectedEmplacement(e.target.value)}
                style={styles.input}
              >
                <option value="">Select an emplacement</option>
                {emplacements.map((emp) => (
                  <option key={emp.id} value={emp.emplacement}>
                    {emp.emplacement}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="surface" style={styles.label}>Surface (m²)</label>
            <input
              type="number"
              id="surface"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              style={styles.input}
              placeholder="Enter surface area"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="pieces" style={styles.label}>Number of Rooms</label>
            <input
              type="number"
              id="pieces"
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
              style={styles.input}
              placeholder="Enter number of rooms"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="chambres" style={styles.label}>Number of Bedrooms</label>
            <input
              type="number"
              id="chambres"
              value={chambres}
              onChange={(e) => setChambres(e.target.value)}
              style={styles.input}
              placeholder="Enter number of bedrooms"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="bain" style={styles.label}>Number of Bathrooms</label>
            <input
              type="number"
              id="bain"
              value={bain}
              onChange={(e) => setbain(e.target.value)}
              style={styles.input}
              placeholder="Enter number of bathrooms"
            />
          </div>

          <button type="button" onClick={handleSubmit} style={styles.button}>
            Submit
          </button>
        </form>

        {predictedPrice !== null && (
          <h2 style={styles.result}>Predicted Price: {predictedPrice.toFixed(2)} MAD per month</h2>
        )}
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    backgroundColor: '#E86A2A',
    padding: '50px 0',
    minHeight: '100vh',
  },
  container: {
    padding: '30px',
    backgroundColor: '#F5F5F5',
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
    maxWidth: '700px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E86A2A',
  },
  header: {
    textAlign: 'center',
    color: '#E86A2A',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    flex: '0 0 40%',
    color: '#333',
    fontSize: '16px',
    fontWeight: '500',
  },
  input: {
    flex: '1 0 55%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: '#fff',
    transition: 'border 0.3s ease',
    outline: 'none',
  },
  inputFocus: {
    border: '1px solid #FFA500',
  },
  button: {
    backgroundColor: '#E86A2A',
    color: '#fff',
    border: 'none',
    padding: '12px 0',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  },
  buttonHover: {
    backgroundColor: '#ff8c00',
  },
  result: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#333',
    fontSize: '20px',
    fontWeight: '600',
  },
  message: {
    color: '#FF4500',
  }
};

export default PredictionForm;