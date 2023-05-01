import React from 'react'
import {Chrono} from 'react-chrono'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const Course = props => {
  const {way} = props
  const items = [
    {
      title: `${way.title}`,
    },
  ]

  return (
    <div style={{width: '500px', height: '950px'}}>
      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        <div>
          <h1>{way.courseTitle}</h1>
          <div className="list">
            <AiFillClockCircle />
            <p>{way.duration}</p>
          </div>
          <p>{way.description}</p>
          <div className="list">
            {way.tagsList.map(one => (
              <p className="para" key={one.id}>
                {one.name}
              </p>
            ))}
          </div>
        </div>
      </Chrono>
    </div>
  )
}

export default Course
