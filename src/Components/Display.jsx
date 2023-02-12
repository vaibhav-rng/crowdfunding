import React, { useState, useEffect } from 'react'
import logo1 from '../mockImage/profile.png'
import axios from 'axios'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';



const Display = (props) => {

  const [index1, setindex1] = useState(0)
  const [count, setCount] = useState(0)
  const [projectData, setProjectData] = useState({})
  const [addMiles, setAddMiles] = useState([])
  const [invester, setInvestors] = useState([])
  const [investerName, setInvestorsName] = useState([])

  
  let { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8000/projects/${id}`)
      .then((response) => {
        setCount(response.data.status1)
        setProjectData(response.data.rget)
        setAddMiles(response.data.rget.milestones)
        setInvestors(response.data.rget.investors)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  const findName=(_id)=>{
    axios.get(`http://localhost:8000/findUser/${_id}`)
    .then((response)=>{
      
      setInvestorsName(response.data)
      console.log(response.data)
    })
  }


  return (

    <>
      <br />
      <div className=' text-center'>
        <h3 className=' font-weight-normal'>{projectData.title}</h3>
        <h5 className=' text-muted font-weight-normal'>{projectData.subtitle}</h5>
      </div>


      <br />

    

      <div className=' d-flex justify-content-around'>
        <div style={{ height: "30rem" }} className=' w-75  container '>
          <img style={{ height: "30rem" }} src={projectData.myFile} className=" img-fluid w-75" />
        </div>
        <div className=' container  w-50 '>
          <br />
          <div style={{ height: "2%" }} className="progress rounded-0">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: ((projectData.total/projectData.fundingGoals)*100) +"%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <h1>{projectData.total===undefined?0:projectData.total/1000000000000000000}<svg fill='black' width="50" height="40" viewBox="5 0 20 30" role="img" xmlns="http://www.w3.org/2000/svg"><title>Ethereum icon</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" /></svg></h1>
          <h6 className='text-muted'>pledged of {projectData.fundingGoals/1000000000000000000}</h6>

          <h1>{invester.length}</h1>
          <h6 className='text-muted'>backers</h6>

          <h1>{count}</h1>
          <h6 className='text-muted'>Milestone reached of {addMiles.length}  </h6>

          <br />
          <br />
          <Link to={`/backProject/${id}`} className='col-12 btn btn-success rounded-0'>Back this project</Link>
        </div>
      </div>



      <br /><br /><br /><br />

      <div className=' d-flex justify-content-around'>
        <div className=' w-50 container'>
          <div >
            <h4>Story</h4>
            <h6>{projectData.desc}</h6>
          </div>
          <div>
            <h4>Risks and challenges</h4>
            <h6>{projectData.risk}</h6>
          </div>
        </div>
        <div className='w-25 container'>

          <h5>Milestones</h5>
          {addMiles.map((items, index) => <>{index === index1 ? <div className=' border-0' style={{ backgroundColor: "#F9F9F9" }}>
            <div className="card border-0" style={{ backgroundColor: "#F9F9F9" }}>

              <br />
              <div className=' d-flex justify-content-around'>
                <h4 className=' text-monospace '>{items.title}</h4>
              </div>
              <div style={{ height: 10 }} className="progress rounde-0 ">
                <div className="progress-bar rounded-0 " role="progressbar" style={{ width: items.amount + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{items.amount} %</div>
              </div>

              <div className="card-body">
                <div className=' text-secondary text-center'>{items.desc}</div>

              </div>
            </div>

            <div>

            </div>
            <div className=' d-flex justify-content-between '>
              <button className=' border-0 btn bg-transparent rounded-0 btn-primary' onClick={() => { index1 == 0 ? setindex1(index1) : setindex1(index1 - 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="Blue" className="bi bi-arrow-left-short" viewBox="0 0 20 16">
                  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
              </button>
              <button className='border-0 btn bg-transparent rounded-0 btn-primary btn btn-primary' onClick={() => { index1 ===addMiles.length - 1 ? setindex1(index1) : setindex1(index1 + 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="Blue" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
            </div>
            <br />
          </div> : null}
          </>)}

        </div>
      </div>

    </>
  )
}

export default Display