import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'

// Collect all reducers here
import reducer from './game/reducers'
import GameContainer from './game/containers/GameContainer'

ReactDOM.render(
  <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)