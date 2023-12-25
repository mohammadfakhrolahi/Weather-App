import React from 'react'

import Input from './components/input/Input'
import Icon from './components/Icon/Icon'
import CardSm from './components/CardSm/CardSm'
import CardLg from './components/CardLg/CardLg'
import Progress from './components/Progress/Progress'
import SunriseSunset from './components/SunriseSunset/SunriseSunset'
import WindStatus from './components/WindStatus/WindStatus'

const App = () => {
  const footer = 'testing footer...'
  const header = 'Header'

  return (
    <main className="container mt-4 ">
      <div className="row ">
        <div className="col-3 bg-white p-4 rounded-start-5 ">
          <div>
            <Input />
          </div>
          <Icon className="icon-2xl" />
          <div>
            <span className="fs-xxl">12°C</span>
          </div>
          <div className="mt-2">
            <span>Monday, </span>
            <span className="text-black-50 ">16:00</span>
          </div>
          <div>
            <hr className="text-secondary my-4" />
          </div>
          <div className="d-flex flex-column gap-2">
            <span>
              <i class="bi bi-cloud me-2 text-secondary"></i>Mostly Cloudy
            </span>
            <span>
              <i class="bi bi-cloud-rain me-2 text-secondary"></i>Rain-30%
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center bg-light p-4 mt-5 rounded-4">
            <p className="m-0">
              <i class="bi bi-geo-alt-fill me-2"></i>New York, NY, USA
            </p>
          </div>
        </div>
        <div className="col-9 bg-light p-4 rounded-end-5">
          <div className="row  ">
            <div className="col-12 ">
              <h3 className="mb-4">Week</h3>
              <div className="row">
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
                <div className="col">
                  <CardSm />
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <h3>Today's Highlights</h3>
              <div className="row">
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={header}>
                      <Progress style={{ width: '25%' }}>2</Progress>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg footer={footer} header={header}>
                      <WindStatus>2.70</WindStatus>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={header}>
                      <SunriseSunset sunrise={'5:40 AM'} sunset={'6:00 PM'}/>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={header}/>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={header}/>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={header} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
