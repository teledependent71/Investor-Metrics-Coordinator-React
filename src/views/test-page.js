import React from 'react'

import { Helmet } from 'react-helmet'

import './test-page.css'

const TestPage = (props) => {
  return (
    <div className="test-page-container">
      <Helmet>
        <title>test-page - Investor Metrics Coordinator</title>
        <meta
          property="og:title"
          content="test-page - Investor Metrics Coordinator"
        />
      </Helmet>
    </div>
  )
}

export default TestPage
