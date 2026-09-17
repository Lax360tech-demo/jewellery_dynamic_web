import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JewelleryProvider } from './context/JewelleryContext';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JewelleryProvider>
        <App />
      </JewelleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
