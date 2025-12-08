import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css'
import App from './App.jsx'
import { MoodContext } from './contexts/mood.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoodContext.Provider>
      <App />
    </MoodContext.Provider>
  </StrictMode>,
)

/* Ajout de l'animation pour l'icône météo */
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-50px); }
    100% { transform: translateY(0px); }
  }

  .weather-icon-animated {
    // animation: float 3s ease-in-out infinite;
    animation: float 5s  ease-in-out  infinite
  }
`;
document.head.appendChild(style);
