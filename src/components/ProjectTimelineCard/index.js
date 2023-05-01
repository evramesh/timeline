import React from 'react'
import {Chrono} from 'react-chrono'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const Project = props => {
  const {send} = props
  const {
    title,
    description,
    imageUrl,
    projectTitle,
    projectUrl,
    duration,
  } = send
  const items = [
    {
      title: `${title}`,
    },
  ]

  return (
    <div style={{width: '500px', height: '950px'}}>
      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        <div>
          <img className="icon" alt="project" src={imageUrl} />
          <h1 className="para1">{projectTitle}</h1>
          <AiFillCalendar />
          <p>{duration}</p>
          <p>{description}</p>
          <a href={projectUrl}>Visit</a>
        </div>
      </Chrono>
    </div>
  )
}

export default Project
