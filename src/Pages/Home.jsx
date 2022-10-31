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
import LoginRegister from '../Components/LoginRegister'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

    
      <Header />
      <br />

      <h4 className=' text-muted'>Your Projects</h4>
      <hr />
      <div className=' d-flex justify-content-center'>
        <Link to="/LoginRegister" className=' btn btn-success col-4'><h5>Login</h5></Link>
      </div>

      <h4 className=' text-muted'>All projects</h4>
      <hr />
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