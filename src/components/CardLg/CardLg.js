import React from 'react'

import './CardLg.css'

const CardLg = ({ header, footer, children }) => {
  return (
    <div className="col-4 p-0">
      <div className="m-2">
        <div className="card bg-white border-0 rounded-4">
          <div className="card-header bg-white pt-3 px-4 border-0 rounded-top-4 text-black-50 fw-semibold">
            {header}
          </div>
          <div className="card-body d-flex align-items-center px-4">
            {children}
          </div>
          <div className="card-footer bg-white pb-3 px-4 border-0 rounded-bottom-4 fw-semibold">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLg
