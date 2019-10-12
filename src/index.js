import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import App from './App'

const RootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  RootElement
)
