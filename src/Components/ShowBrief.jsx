import React from 'react'
import mockImage from '../mockImage/logo.png'

function ShowBrief() {
    return (

        <div className='d-flex justify-content-between'>
            <div className=' container'>
                <a href=""><img src={mockImage} alt="..." className="rounded border-0 h-100 w-100"></img>
                </a>
            </div>
            <div className=' container'>
                <br />
                <a href=""><h5 className=' text-center  text-black-50'>Project Title</h5></a>
                <h6 className=' text-center text-success'>10% funded</h6>
                <h6 className=' text-center text-monospace text-muted'>by vaibhav</h6>
            </div>
        </div>
    )
}

export default ShowBrief