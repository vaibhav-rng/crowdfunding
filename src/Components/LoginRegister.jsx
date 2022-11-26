import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginRegister() {

    const [toggle, setToggle] = useState(true);

    return (
        <>
            <br />
            <br />
            <br />
            <div className=' d-flex justify-content-around container p-5'>


                {!toggle ?
                    <button onClick={() => setToggle(!toggle)} className='border-0 rounded container text-center p-5 bg-light'>
                       <h1>Login</h1>
                    </button>

                    : <div className=' container text-center p-5'>
                        <h5 className=' alert-dark p-2 rounded'>Login</h5>
                        <br />
                        <div>
                            <input placeholder='Enter Username' className='form form-control text-center' type="text" />
                            <br />
                            <input placeholder='Enter Password' className='form form-control text-center' type="password" />
                            <br />
                            <Link to="/ProfileHome" className='btn btn-primary col-4'>Login</Link>
                        </div>

                    </div>}

                {!toggle ?
                    <div className='container text-center p-5'>
                        <h5 className='alert-dark p-2 rounded'>Register</h5>
                        <br />
                        <div>
                            <input placeholder='Enter Email' className='form form-control text-center' type="text" />
                            <br />
                            <input placeholder='Enter Password' className='form form-control text-center' type="password" />
                            <br />
                            <input placeholder='re-enter Password' className='form form-control text-center' type="password" />
                            <br />
                            <button className='btn btn-success col-4'>Register</button>
                        </div>
                    </div>

                    : <button onClick={() => setToggle(!toggle)} className='border-0 rounded container text-center p-5 bg-light'>
                        <h1 className=' text-muted'> Register</h1>
                    </button>}


            </div>
        </>
    )
}

export default LoginRegister


