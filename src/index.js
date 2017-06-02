import React from 'react'
import { render } from 'react-snapshot';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'

import reducer from './reducer'
import Pages from './pages'

render(
  <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Pages />
  </Provider>,
  document.getElementById('root')
)