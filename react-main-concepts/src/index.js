import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function index() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
setInterval(index, 1000);
