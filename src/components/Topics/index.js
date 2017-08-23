import React from 'react'
import { Link, Route, Prompt } from 'react-router-dom'
import Helmet from 'react-helmet'

import Topic from './Topic'

const Topics = props => {
  const { match } = props

  return (
    <div>
      <Prompt message="Are you sure you want to leave?" />

      <Helmet title="Topics" />
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
    </div>
  )
}

export default Topics
