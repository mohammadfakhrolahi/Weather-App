import React from 'react'

const CardSm = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-1 bg-white p-1 rounded-3'>
      <span>Sun</span>
      <i className="bi bi-brightness-high-fill fs-4 text-secondary"></i>
      <div>
        <span>13°</span>
        <span className='text-black-50 ms-1'>5°</span>
      </div>
    </div>
  )
}

export default CardSm