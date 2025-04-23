import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Vite + Vercel Fullstack Test</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
