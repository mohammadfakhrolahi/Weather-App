import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Input from './components/input/Input'
import Icon from './components/Icon/Icon'
import CardSm from './components/CardSm/CardSm'
import CardLg from './components/CardLg/CardLg'
import Progress from './components/Progress/Progress'
import SunriseSunset from './components/SunriseSunset/SunriseSunset'
import NumberStatus from './components/NumberStatus/NumberStatus'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [icon, setIcon] = useState(null)

  let location = 'toronto'

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { data } = await axios.get(
        //   'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,rain,snowfall,weather_code,cloud_cover,wind_speed_10m&hourly=temperature_2m,rain,snowfall,weather_code,cloud_cover,visibility,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FNew_York'
        // )

        const { data } = await axios.get(
          `http://api.weatherstack.com/forecast?access_key=3d105867b135fec4e23967af8e75489d&query=${location}`
        )

        setWeatherData(data)
        console.log(data)
      } catch (error) {
        console.log('Error fetching weather data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // console.log(weatherData.current.weather_descriptions)

  if (loading) {
    return <p>Loading...</p>
  }

  // Time
  const time = (time) => {
    const extractedTime = time.split(' ')
    return `${extractedTime[0]}, ${extractedTime[1]}`
  }

  // Get icon class
  const iconClass = [
    { Overcast: 'bi bi-clouds' },
    { Sunny: 'bi bi-brightness-high' },
    { Rainy: 'bi bi-cloud-rain' },
    { 'Partly cloudy': 'bi bi-cloud' },
    { 'Light Rain Shower, Rain Shower': 'bi bi-cloud-drizzle' },
    { Mist: 'bi bi-cloud-drizzle' },
    { 'Snow Grains': 'bi bi-cloud-snow' },
    { Snow: 'bi bi-cloud-snow' },
    { Clear: 'bi bi-brightness-low' },
    { Blizzard: 'bi bi-cloud-snow' },
    { Lightning: 'bi bi-lightning' },
  ]

  const weatherCondition = weatherData.current.weather_descriptions
  const iconObject = iconClass.find((item) =>
    item.hasOwnProperty(weatherCondition)
  )
  const iconValue = iconObject
    ? `${iconObject[weatherCondition]} icon-2xl`
    : weatherData.current.weather_icons

  // Get sunrise/sunset time
  const currentDate = Object.keys(weatherData.forecast)

  const footer = 'testing footer...'
  const header = 'Header'

  return (
    <main className="container mt-4 ">
      <div className="row ">
        <div className="col-3 bg-white p-4 rounded-start-5 ">
          <div>
            <Input />
          </div>
          <Icon className={iconValue} />
          <img src={iconValue} alt="" />
          <div>
            <span className="fs-xxl">{weatherData.current.temperature}°C</span>
          </div>
          <div className="mt-2">
            <span className="text-black">
              <i className="bi bi-calendar4-week me-2 text-secondary"></i>
              {time(weatherData.location.localtime)}
            </span>
          </div>
          <div>
            <hr className="text-secondary my-4" />
          </div>
          <div className="d-flex flex-column gap-2">
            <span>
              <i className="bi bi-cloud me-2 text-secondary"></i>
              {weatherData.current.weather_descriptions}
            </span>
            <span>
              <i className="bi bi-cloud-rain me-2 text-secondary"></i>Rain-10%
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center bg-light p-4 mt-5 rounded-4">
            <p className="m-0">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {weatherData.location.name}
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
            <div className="col-12 mt-5">
              <h3 className="mb-4">Today's Highlights</h3>
              <div className="row">
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'UV Index'}>
                      <Progress
                        style={{ width: weatherData.current.uv_index * 10 }}
                      >
                        {weatherData.current.uv_index}
                      </Progress>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'Wind Status'}>
                      <NumberStatus unit={'km/h'}>
                        {weatherData.current.wind_speed}
                      </NumberStatus>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'Sunrise & Sunset'}>
                      <SunriseSunset
                        sunrise={
                          weatherData?.forecast[currentDate]?.astro?.sunrise
                        }
                        sunset={
                          weatherData?.forecast[currentDate]?.astro?.sunset
                        }
                      />
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'Humidity'}>
                      <NumberStatus unit={'%'}>
                        {weatherData.current.humidity}
                      </NumberStatus>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'Visibility'}>
                      <NumberStatus unit={'km'}>
                        {weatherData.current.visibility}
                      </NumberStatus>
                    </CardLg>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="m-2">
                    <CardLg header={'Average Temperature'}>
                      <NumberStatus>
                        {weatherData?.forecast[currentDate]?.avgtemp}°C
                      </NumberStatus>
                    </CardLg>
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
