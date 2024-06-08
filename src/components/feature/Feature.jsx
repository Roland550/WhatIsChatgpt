import React from 'react'
import './feature.css'

const feature = ({title, text}) => {
  return (
    <div className='gpt4_feature-container_feature'>
      <div className="gpt4_feature-container_feature-title">
          <div />
          <h1>{title}</h1>
      </div>
      <div className="gpt4_feature-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default feature