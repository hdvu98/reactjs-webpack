import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout }  from '@components/Layout'
const Home = lazy(()=> import('../Home'))
const About = lazy(()=> import('../About'))
const Contact = lazy(()=> import('../Contact'))
console.log(Home)
const App = () => {
  return(
  <Router>
    <Layout>
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Suspense>
    </Layout>
  </Router>
  )
}

export default App