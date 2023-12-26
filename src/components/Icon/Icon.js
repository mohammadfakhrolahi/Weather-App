import React from 'react'

import './Icon.css'

const Icon = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <i className={props.className}></i>
    </div>
  )
}

export default Icon
