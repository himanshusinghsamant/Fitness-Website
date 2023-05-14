import React from 'react'
import './Workout_main_sectionStyle.css'
// import Woutimg from '../images/workout-1.jpg'

const Workout_main_section = (props) => {
  return (
    <div>
      <div className="work-out-block-1">
        <div className="work-out-blk-img">
            <img src={props.image} alt="img" />
        </div>
        <div className="work-out-blk-info">
            <h2>{props.title}</h2>
            <p>{props.info}</p>
            <h3>{props.title2}</h3>
            <p>{props.info2}</p>
            <h3>{props.title3}</h3>
            <p>{props.info3}</p>
        </div>
      </div>
    </div>
  )
}

export default Workout_main_section
