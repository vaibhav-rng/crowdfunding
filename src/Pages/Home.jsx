import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Components/Header'
import ShowBrief from '../Components/ShowBrief'
import { Link } from 'react-router-dom'
import Test from '../Components/Test'
import axios from 'axios'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { UserProjects } from '../Components/UserProjects';
import Test2 from '../Components/Test2';


function Home() {

  const [myProject, setMyProject] = useState([])

  const {loggedIn}=useContext(AuthContext)
  

  useEffect(() => {
    axios.get("http://localhost:8000/projects")
      .then((response) => {
        setMyProject(response.data)
      })
      .catch((err) => {
        console.log(err)
      })



  },[])

  return (
    <div >
      {/* <Test2/> */}


      <Header />
      <br />

      <h4 className=' text-muted'>Your Projects</h4>
      <hr />
      {loggedIn === undefined?
      <div className=' d-flex justify-content-center'>
        <Link to="/LoginRegister" className=' btn btn-success col-4'><h5>Login</h5></Link>
      </div>:<UserProjects/>
      
      }

      

      <h4 className=' text-muted'>All projects</h4>
      <hr />


      <div className=' d-flex  justify-content-start flex-wrap'>
        {/* <Test style={{ height: "10px", marginBottom: "50px" }} className=' border-0  border border-dark' /> */}
        {myProject.map((data, index) => <div style={{ height: "120px", marginBottom: "140px" }} className='w-50 border-0  border border-dark'><ShowBrief percent={data.total==undefined?0:((data.total/data.fundingGoals)*100)} user={data.user} id={data._id} sub={data.subtitle} myFile={data.myFile} title={data.title} /></div>)}
      </div>


    </div>
  )
}

export default Home