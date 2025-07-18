import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster position="top-center" reverseOrder={false} toastOptions={{ style: { background: '#1f2937', color: '#f9fafb', border: '1px solid #334155' } }} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);