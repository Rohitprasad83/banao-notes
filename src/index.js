import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AuthContextProvider, NoteContextProvider } from 'context/index'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NoteContextProvider>
          <App />
        </NoteContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
