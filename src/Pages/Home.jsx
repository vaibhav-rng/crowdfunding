import React from 'react'
import Basic from '../Components/Basic'
import Header from '../Components/Header'
import Milestones from '../Components/MileStones'
import Nextheader from '../Components/Nextheader'
import Payement from '../Components/Payement'
import Projectheader from '../Components/Projectheader'
import Rewards from '../Components/Rewards'
import Story from '../Components/Story'
import Preview from '../Components/Preview'
import ShowBrief from '../Components/ShowBrief'

function Home() {
  return (
    <div>
      <Header />
      <br />
      <div className=' d-flex  justify-content-start flex-wrap'>
        <div style={{ height: "120px", marginBottom: "50px" }} className='w-50 border-0  border border-dark'>
          <ShowBrief />
        </div>
        <div style={{ height: "120px", marginBottom: "50px" }} className='w-50 border-0  border border-dark'>
          <ShowBrief />
        </div>
        <div style={{ height: "120px", marginBottom: "50px" }} className='w-50 border-0  border border-dark'>
          <ShowBrief />
        </div>

      </div>

    </div>
  )
}

export default Home