import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './contex/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TaskContextProvider>
)
