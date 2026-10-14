import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { initializeTheme } from './theme/utils';
import './styles/global.css';
import './styles/tokens.css';

const root = document.getElementById('root');
if (!root) throw new Error('Homepage root element is missing.');
const initialThemePreference = initializeTheme();

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App initialThemePreference={initialThemePreference} />
    </BrowserRouter>
  </StrictMode>,
);
