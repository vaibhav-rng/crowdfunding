import React from 'react'
import Header from './Header'

const Requests = () => {
    return (
        <>
        <Header/>
            <div className='d-flex justify-content-between p-2  border'>
                <div className=' font-weight-bolder'>Requst1</div>
                <div>
                    <button className=' btn btn-info mx-4 px-4'>view</button>
                    <button className=' btn btn-success mx-2 px-5'>Accept</button>
                    <button className=' btn btn-danger px-5 '>Reject</button>
                </div>
            </div>

            <div className='d-flex justify-content-between p-2  border'>
                <div className=' font-weight-bolder'>Requst1</div>
                <div>
                    <button className=' btn btn-info mx-4 px-4'>view</button>
                    <button className=' btn btn-success mx-2 px-5'>Accept</button>
                    <button className=' btn btn-danger px-5 '>Reject</button>
                </div>
            </div>

        </>
    )
}

export default Requests