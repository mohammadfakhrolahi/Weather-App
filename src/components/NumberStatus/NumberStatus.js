import React from 'react'

const NumberStatus = ({ unit, children, icon }) => {
  return (
    <div  className='w-100 d-flex justify-content-between align-items-center'>
      <div>
        <span className="display-6 fw-semibold">{children}</span>
        <span className="fs-4 ms-1">{unit}</span>
      </div>
      <i className={icon}></i>
    </div>
  )
}

export default NumberStatus
