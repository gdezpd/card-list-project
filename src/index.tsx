import React from 'react'

import ReactDOM from 'react-dom/client'
// eslint-disable-next-line import/order
import { Provider } from 'react-redux'
import 'index.sass'

import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
