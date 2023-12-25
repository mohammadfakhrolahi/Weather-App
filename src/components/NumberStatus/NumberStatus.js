import React from 'react'

const NumberStatus = ({ unit, children }) => {
  return (
    <div>
      <div>
        <span className="display-6 fw-semibold">{children}</span>
        <span className="fs-4 ms-1">{unit}</span>
      </div>
    </div>
  )
}

export default NumberStatus
