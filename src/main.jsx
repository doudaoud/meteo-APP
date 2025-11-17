import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
