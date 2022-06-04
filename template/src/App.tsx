import React from 'react';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#111827',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <span
        style={{
          textDecoration: 'underline',
          color: 'white',
          fontWeight: 700,
          fontSize: '20px',
        }}
      >
        Hello World
      </span>
      <span style={{ fontSize: 20 }}>👋</span>
    </div>
  );
}

export default App;
