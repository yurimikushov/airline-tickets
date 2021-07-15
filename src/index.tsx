import React from 'react'
import { render } from 'react-dom'
import { StoreProvider } from './store'
import App from './App'
import './index.css'

render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
