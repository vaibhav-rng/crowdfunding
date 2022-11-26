import React from 'react'
import { Link } from 'react-router-dom'
import mockImage from '../mockImage/logo.png'

function ShowBrief(props) {
    return (


        <div className='d-flex justify-content-between'>

            <div className=' container'>
                <Link to="preview" state={{"basic":props.data.projectBasic,"miles":props.data.milestones,"rewards":props.data.rewards}} > <img src={mockImage} alt="..." className="rounded border-0 h-100 w-100"></img>
                </Link>
            </div>
            <div className=' container'>
                <br />
                <a href=""><h5 className=' text-center  text-black-50'>{props.data.projectBasic.title}</h5></a>
                <h6 className=' text-center text-success'>{props.data.projectBasic.goals}% funded</h6>
                <h6 className=' text-center text-monospace text-muted'>by vaibhav</h6>
            </div>
        </div>
    )
}

export default ShowBrief