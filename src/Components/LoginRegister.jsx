import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function LoginRegister(props) {

    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();
    const [userData,setUserData] = useState({name:"",email:"",password:"",address:""});
    const [loginData,setLoginData] = useState({email:"",password:""});
    const [error,setError]=useState(false);


    const onchangeHandler =(event)=>{
        const {name,value}=event.target

        setUserData({...userData,[name]:value})

    }

    const onchangeHandlerLogin =(event)=>{
        const {name,value}=event.target

        setLoginData({...loginData,[name]:value})
    }

    const onSubmitHandeler =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:8000/users",{
            name:userData.name,
            email:userData.email,
            password:userData.password,
            address:userData.address

        }).then(() => {
            alert("done")
        }).catch(() => {
            alert("not done")
        })
    }
    const onSubmitHandelerLogin =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:8000/users/login",{
            email:loginData.email,
            password:loginData.password,
        }).then(() => {
            navigate(props.route)
            window.location.reload(true)
        }).catch(() => {
            setError(true)
        })
    }

    
    

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

                    : <form onSubmit={(e)=>onSubmitHandelerLogin(e)} className=' container text-center p-5'>
                        <h5 className=' alert-dark p-2 rounded'>Login</h5>
                        <br />
                        <div>
                            <input name="email" onChange={(e)=>onchangeHandlerLogin(e)} value={loginData.email} placeholder='Enter Username' className='form form-control text-center' type="text" />
                            <br />
                            <input name="password" onChange={(e)=>onchangeHandlerLogin(e)} value={loginData.password} placeholder='Enter Password' className='form form-control text-center' type="password" />
                        
                            
                            {error?<div className=' text-danger'> *Please Enter correct username or password</div>:<br />}
                            <button type='submit' className='btn btn-primary col-4'>Login</button>
                            
                        </div>

                    </form>}

                {!toggle ?
                    <form className='container text-center p-5' onSubmit={(event)=>{onSubmitHandeler(event)}}>
                        <h5 className='alert-dark p-2 rounded'>Register</h5>
                        <br />
                        <div>
                            <input value={userData.name} onChange={(event)=>{onchangeHandler(event)}} name='name' placeholder='Enter the Name' className='form form-control text-center' type="text" />
                            <br />
                            <input value={userData.email} onChange={(event)=>{onchangeHandler(event)}} name='email' placeholder='Enter Email' className='form form-control text-center' type="text" />
                            <br />
                            <input value={userData.address} onChange={(event)=>{onchangeHandler(event)}} name='address' placeholder='Enter Address' className='form form-control text-center' type="text" />
                            <br />
                            <input value={userData.password} onChange={(event)=>{onchangeHandler(event)}} name='password' placeholder='Enter Password' className='form form-control text-center' type="password" />
                            <br />
                            <input placeholder='re-enter Password' className='form form-control text-center' type="password" />
                            <br />
                            <button type='submit' className='btn btn-success col-4'>Register</button>
                        </div>
                    </form>

                    :<button onClick={() => setToggle(!toggle)} className='border-0 rounded container text-center p-5 bg-light'>
                        <h1 className=' text-muted'> Register</h1>
                    </button>}


            </div>
        </>
    )
}

LoginRegister.defaultProps = {
    route:"/"
  }

export default LoginRegister


