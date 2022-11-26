import React from 'react'
import { useLocation } from 'react-router-dom'
import Preview from '../Components/Preview'


const PreviewPage = (props) => {
    const location =useLocation()
  return (
    <div>
        <Preview basicState={location.state.basic} addMiles={location.state.miles} rewards={location.state.rewards}/>
    </div>
  )
}

export default PreviewPage