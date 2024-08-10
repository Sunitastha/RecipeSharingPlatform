import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import store from './store/store.js'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MantineProvider>
      <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </MantineProvider>

  </React.StrictMode>,
)
