// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './styles/Header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div className='body'>
      <div>
        {/* header */}
        <header>
          <h3 className='title-app'>
            Weather App
          </h3>
          <button className='mood-button'>
            <DarkModeOutlinedIcon className='mood-icon'/>
          </button>
        </header>
        {/* fin de header */}
      </div>
    </div>
  )
}

export default App
