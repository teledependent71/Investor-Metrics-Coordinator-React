import React from 'react'

import PropTypes from 'prop-types'

import './kyleigh.css'

const Kyleigh = (props) => {
  return (
    <div className="kyleigh-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Kyleigh.defaultProps = {
  text: 'Text',
}

Kyleigh.propTypes = {
  text: PropTypes.string,
}

export default Kyleigh
