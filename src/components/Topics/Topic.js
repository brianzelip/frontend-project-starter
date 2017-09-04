import React from 'react'
import Helmet from 'react-helmet'

const Topic = ({ match }) => (
  <div>
    <Helmet title={match.params.topicId} />
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Topic
