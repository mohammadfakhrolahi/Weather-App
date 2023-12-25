import React from 'react'

const SunriseSunset = ({ sunrise, sunset }) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <i class="bi bi-sunrise-fill me-3 fs-1 text-warning"></i>
        <span className="fs-3">{sunrise}</span>
      </div>
      <div className="d-flex align-items-center">
        <i class="bi bi-sunset-fill me-3 fs-1 text-warning"></i>
        <span className="fs-3">{sunset}</span>
      </div>
    </div>
  )
}

export default SunriseSunset
