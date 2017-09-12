import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from 'components/Home'
import About from 'components/About'
import Topics from 'components/Topics'
import NotFound from 'components/NotFound'
import Nav from 'components/Nav'

const RouterExample = () => (
  <div>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/:topics" component={Topics} />
    <Route component={NotFound} />
    <hr />
    VS.
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:topics" component={Topics} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Helmet titleTemplate="%s | Frontend Starter Project" />{' '}
      <h1>Frontend Starter Project - React</h1>
      <Nav />
      <RouterExample />
    </div>
  </BrowserRouter>
)

export default App
