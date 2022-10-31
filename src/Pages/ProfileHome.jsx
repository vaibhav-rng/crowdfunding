import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import ShowBrief from '../Components/ShowBrief'

const ProfileHome = () => {
    return (
        <>


            <Header />
            <br />

            <h4 className=' text-muted'>Your Projects</h4>
            <hr />
            <div className=' d-flex justify-content-center'>

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
            <br />
            <h4 className=' text-muted'>Projects you'are Backing</h4>
            <hr />
            <h5 className=' text-center text-black-50'>Currently you are not backing any project</h5>
            <br />
            <div className=' d-flex justify-content-center'>
                <Link to="/" className=' btn btn-dark col-5'><h5>Browse</h5></Link>
            </div>
            <br />

        </>
    )
}

export default ProfileHome