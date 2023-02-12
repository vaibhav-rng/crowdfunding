import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export const UserProjects = () => {
  const [userProject, setUserProject] = useState([])
   
  useEffect(() => {
      axios.get("http://localhost:8000/allProjects")
      .then((response) => {
        setUserProject(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])


    return (
        <div className=' d-flex  justify-content-start flex-wrap'>
        {console.log(userProject)}
        {userProject.map((item)=>
        <div style={{ height: "120px", marginBottom: "140px" }} className='w-50 border-0  border border-dark'>
         <div className=' d-flex justify-content-between'>
            <div className=' container'>
                {/* <Link to="preview" state={{"basic":props.data.projectBasic,"miles":props.data.milestones,"rewards":props.data.rewards}} > <img src={mockImage} alt="..." className="rounded border-0 h-100 w-100"></img>
                </Link> */}
                <div >
                    <img style={{ height: "210px" }} src={item.myFile} className=" rounded img-fluid w-100" />
                </div>
            </div>
            <div className='w-75 container'>
                <br />
                <Link to={`project/${item._id}`}><h5 className=' text-center  text-black-50'>{item.title}</h5></Link>
                <br />
                
                <div style={{ height: "100px", width: "250px" }} className='overflow-auto'>
                    <Link className=' mb-2 rounded-0 col-12 btn btn-success' to={`requestFunds/${item._id}`}>Request Funds</Link>

                    <br />

                    <Link to={`project/${item._id}`} className=' rounded-0 col-12 btn btn-primary'>View</Link>
                </div>
            
                <h6 className=' text-center   text-success'>{item.total==undefined?0:parseInt((item.total/item.fundingGoals)*100)} % funded</h6>
            </div>
            
        </div>
        </div>
        )}
     </div>
    )
}
