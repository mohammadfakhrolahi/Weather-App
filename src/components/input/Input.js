import React from 'react'

const Input = () => {
  return (
    <div className="input-group ">
      <button
        className="btn  bg-white rounded-start-pill"
        type="button"
        id="button-addon1"
      >
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text"
        className="form-control rounded-end-pill border border-0"
        placeholder="Search for place..."
      />
    </div>
  )
}

export default Input
