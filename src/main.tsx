import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './directorySupplement';
import './momaSupplement';
import './tpgSupplement';
import './icpSupplement';
import './harukaSakaguchiSupplement';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
