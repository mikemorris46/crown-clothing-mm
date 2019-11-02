import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import './index.scss'
import App from './App'

const RootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  RootElement
)
