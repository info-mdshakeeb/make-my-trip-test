import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './Context/Root.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
)
