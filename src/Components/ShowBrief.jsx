import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import mockImage from '../mockImage/logo.png'
import Web3 from 'web3'
import { abi, address } from '../config'
import { useState } from 'react'
import axios from 'axios'



function ShowBrief(props) {
    const [user,setUser]=useState()

    const finduser = async () => {
        axios.get(`http://localhost:8000/findUser/${props.user}`)
        .then(
            (response) => {
                setUser(response.data)
                console.log(response.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        finduser()
    }, []);

    return (

        <div className='d-flex justify-content-between'>
            
            <div className=' container'>
                {/* <Link to="preview" state={{"basic":props.data.projectBasic,"miles":props.data.milestones,"rewards":props.data.rewards}} > <img src={mockImage} alt="..." className="rounded border-0 h-100 w-100"></img>
                </Link> */}
                <div >
                    <img style={{ height: "210px" }} src={props.myFile} className=" rounded img-fluid w-100" />
                </div>
            </div>
            <div className='w-75 container'>
                <br />
                <Link to={`project/${props.id}`}><h5 className=' text-center  text-black-50'>{props.title}</h5></Link>

                <div style={{ height: "100px", width: "250px" }} className='overflow-auto' >
                    <p className='font-weight-light' >{props.sub}</p></div>
                <h6 className=' text-center  text-success'>{parseInt(props.percent)}% funded</h6>
                <h6 className=' text-center text-monospace text-muted'>by {user}</h6>
            </div>

        </div>
    )
}

export default ShowBrief