import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

import Form from '../Form'

const App = () => (
  <BrowserRouter>
    <div>
      <Helmet titleTemplate="%s | Frontend Starter Project" />{' '}
      <h1>Frontend Starter Project - React</h1>
      <Form />
    </div>
  </BrowserRouter>
)

export default App
