import React from 'react'

import './CardLg.css'

const CardLg = (props) => {
  return (
    <div className="card bg-white border-0 rounded-4">
      <div className="card-header bg-white pt-3 px-4 border-0 rounded-top-4 text-black-50 fw-semibold">UV Index</div>
      <div className="card-body  px-4">
        {props.children}
      </div>
      <div className="card-footer bg-white pb-3 px-4 border-0 rounded-bottom-4 fw-semibold">Normal</div>
    </div>
  )
}

export default CardLg
