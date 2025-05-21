

import React, { useEffect, useState } from 'react'


export default function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  const secondDegrees = (seconds / 60) * 360
  const minuteDegrees = ((minutes * 60 + seconds) / 3600) * 360
  const hourDegrees = ((hours + minutes / 60) / 12) * 360

  return (
    <div className="relative h-16">
      <img
        src="/placeholder.svg?height=96&width=96"
      
        width={96}
        height={96}
        className="w-full h-full"
      />
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * 360
          const isQuarterHour = index % 3 === 0
          const length = isQuarterHour ? 6 : 4
          const x1 = 50 + (48 - length) * Math.sin((angle * Math.PI) / 180)
          const y1 = 50 - (48 - length) * Math.cos((angle * Math.PI) / 180)
          const x2 = 50 + 48 * Math.sin((angle * Math.PI) / 180)
          const y2 = 50 - 48 * Math.cos((angle * Math.PI) / 180)
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth={isQuarterHour ? "2" : "1"} />
        })}

        {/* Numbers for 12, 3, 6, 9 */}
        <text x="50" y="15" fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="black">12</text>
        <text x="85" y="50" fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="black">3</text>
        <text x="50" y="85" fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="black">6</text>
        <text x="15" y="50" fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="black">9</text>

        {/* Hour hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="35"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${hourDegrees}, 50, 50)`}
        />

        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="22"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${minuteDegrees}, 50, 50)`}
        />

        {/* Second hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="red"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${secondDegrees}, 50, 50)`}
        />

        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="black" />
      </svg>
    </div>
  )
}

