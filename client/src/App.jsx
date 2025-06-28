import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  // Dynamically choose the API URL based on where the app is running
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const API_URL = isLocalhost
    ? 'http://localhost:8080' // Backend exposed on host machine
    : import.meta.env.VITE_API_URL || 'http://backend:8080'; // Fallback for Docker Compose

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Fetch error:', err);
        setMessage('❌ Failed to load message');
      });
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Flask + React + Docker</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
