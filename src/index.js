import React from 'react'
import ReactDOM from 'react-dom'
import {App} from '@components/App'
import './styles'

console.log(process.env.NODE_ENV)
ReactDOM.render(
  <React.Fragment >
      <App />
  </React.Fragment>,
  document.getElementById('root')
)