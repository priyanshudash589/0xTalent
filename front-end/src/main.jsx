import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <React.StrictMode>
     <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
=======
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
>>>>>>> 3e19dadf2d420e450ea4d05cbb25821ae9d4fb46
