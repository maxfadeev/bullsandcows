import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css'

// Collect all reducers here
import reducer from './game/reducers'
import GameContainer from './game/containers/GameContainer'

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)