import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import './styles'

console.log(process.env.NODE_ENV)
ReactDOM.render(
  <React.Fragment >
    <Layout >
      <Home />
    </Layout>
  </React.Fragment>,
  document.getElementById('root')
)