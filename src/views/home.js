import React from 'react'

import { Helmet } from 'react-helmet'

import Component2 from '../components/component2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Metrics Coordinator</title>
        <meta property="og:title" content="Investor Metrics Coordinator" />
      </Helmet>
      <Component2></Component2>
    </div>
  )
}

export default Home
