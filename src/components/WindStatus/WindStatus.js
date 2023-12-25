import React from 'react'

const WindStatus = (props) => {
  return (
    <div >
      <div>
        <span className='display-6 fw-semibold'>{props.children}</span>
        <span className='fs-4 ms-2'>km/h</span>
      </div>
    </div>
  )
}

export default WindStatus