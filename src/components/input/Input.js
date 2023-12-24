import React from 'react'

const Input = () => {
  return (
    <div className="input-group ">
      <button
        class="btn  bg-white rounded-start-pill"
        type="button"
        id="button-addon1"
      >
        <i class="bi bi-search"></i>
      </button>
      <input
        type="text"
        class="form-control rounded-end-pill border border-0"
        placeholder="Search for place..."
      />
    </div>
  )
}

export default Input
