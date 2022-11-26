import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import ShowBrief from '../Components/ShowBrief'
import myProject from '../mockData/myProjects.json'


const ProfileHome = () => {
    return (
        <>

            <Header />
            <br />
            <Link to="requests" className=' col-2 float-right btn btn-danger'>
            Requests
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" className=" bi bi-2-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                </svg>

                </Link>
            <br />


            <h4 className=' text-muted'>Your Projects</h4>
            <hr />
            <div className=' d-flex justify-content-center'>

                <div className=' d-flex  justify-content-start flex-wrap'>
                    <div className=' d-flex  justify-content-start flex-wrap'>
                        {myProject.map((data, index) => <div style={{ height: "120px", marginBottom: "50px" }} className='w-50 border-0  border border-dark'><ShowBrief data={data} /></div>)}
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