import React from 'react'

const Progress = (props) => {
  return (
    <div className='w-100 h-100 d-flex flex-column justify-content-between '>
    <div class="progress">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        style={props.style}
      ></div>
    </div>
    <span className='align-self-center display-4 fw-normal'>{props.children}</span>
    </div>
  )
}

export default Progress
