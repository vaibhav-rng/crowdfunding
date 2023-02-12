import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { address, abi } from '../config'
import mockImage from '../mockImage/logo.png'



const Test = () => {

  const [account, setAccount] = useState()
  const [address1, setAddress] = useState()
  const [balance, setBalance] = useState()
  const [test, setTest] = useState()
  const [project, setProject] = useState([])
  const [val,setVal]=useState()



  const load = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    const createProject = new web3.eth.Contract(abi, address)

    const accounts = await web3.eth.requestAccounts();

    setAccount(accounts[0]);  

    const projectSize = await createProject.methods.projectLength().call()
    //  const project1= await createProject.methods.projects().call()
    //  console.log(project1)


    //  console.log(projectSize)


    for (let i = 0; i < projectSize; i++) {
      const projects = await createProject.methods.allProject(i).call()
      const project1 = await createProject.methods.projects(projects).call()
      console.log(project1)

      setProject(project => [...project, {_id:projects,project1}])
    }


    console.log(project)


  }     

  const showOwnerProjects=async ()=>
  {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    const createProject = new web3.eth.Contract(abi, address)
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    const projectSize = await createProject.methods.displayAll(accounts[0]).call()
    

    if(projectSize>0)
    {
      for(let i=0;i<projectSize;i++)
      {
        const getProjectOwnedId=await createProject.methods.owner(accounts[0],i).call()
        const project1 = await createProject.methods.projects(getProjectOwnedId).call()
        console.log(project1)
        setProject(project => [...project, {_id:getProjectOwnedId,project1}])
      }
    }


    


  }

  const showInvesterProjects= async ()=>
  {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    const createProject = new web3.eth.Contract(abi, address)

    const accounts = await web3.eth.requestAccounts();

    setAccount(accounts[0])  

    const projectSize = await createProject.methods.projectLength().call()

    for (let i = 0; i < projectSize; i++) {
      const projects = await createProject.methods.allProject(i).call()
      const project1 = await createProject.methods.projects(projects).call()
      const getinvestor = await createProject.methods.investors(accounts[0],projects).call()

      
      if(getinvestor>0)
      {
        setProject(project => [...project, {_id:projects,project1}])
        console.log(getinvestor)
      }

      
    }
    
  }




  useEffect(() => {
    showInvesterProjects()
    // load()
    // showOwnerProjects()
  }, [])




  // const load = async () => {

  //   const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  //   const accounts = await web3.eth.requestAccounts();
  //   setAccount(accounts[0]);

  //   const createProject = new web3.eth.Contract(abi,address)
  //   const abc = await createProject.methods.askVote().call()
  //   const contract_address = await createProject.options.address

  //   setBalance(web3.utils.fromWei((await web3.eth.getBalance(contract_address)).toString(), 'ether'))


  //   setAddress(contract_address)

  // //   for (let i = 1; i <= todoTasks; i++) {
  // //     const task1 = await todoList.methods.tasks(i).call()
  // //     settolist(tolist => [...tolist, task1])
  // //   }
  // //   console.log(tolist)
  // }


  // useEffect(() => {
  //   load()
  // }, [])

  // const doTransaction=async()=>
  // {

  //   const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
  //   // web3.eth.sendTransaction({from:account,to:address1,value:1000000000000000000})
  //   const createProject = new web3.eth.Contract(abi,address)

  //   const arr1=[20,30,40]

  //   const name1= await createProject.methods.createProject("this is second",arr1).send({from:account})





  // }

  const doTransaction1 = async (id) => {

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    // web3.eth.sendTransaction({from:account,to:address1,value:1000000000000000000})
    const createProject = new web3.eth.Contract(abi, address)
    createProject.methods.deposit(id).send({from:account,value:val})

    // const accounts = await web3.eth.requestAccounts();
    // setAccount(accounts[0])

    // const test1 = await createProject.methods.projects(accounts[0], 1).call()


    // console.log(test1)




  }



  return (
    <div>
      {account}
          {/* {test}
        {balance}
        <br />
        <button onClick={doTransaction}>Create project</button>
        

        
        <br />
        {address1} */}

      {/* <button onClick={()=>load()}>get project</button> */}

      {project.map((item) => {
        return <div style={{ height: "200px", marginBottom: "50px" }} className='d-flex justify-content-between '>


        


          <div className=' container'>
            <img src={mockImage} alt="..." className="rounded border-0 h-100 w-100"></img>

          </div>
          <div className=' container'>
            <br />
            <a href=""><h5 className=' text-center  text-black-50'>{item.project1.title}</h5></a>
            <h6 className=' text-center text-success'>{item.project1.amountReceived /1000000000000000000} Ethers funded</h6>
            <h6 className=' text-center text-monospace text-muted'>by {item.project1.owner}</h6>
            <input onChange={(e)=>{setVal((e.target.value)*1000000000000000000)}} name="val" className='form form-control' type="text" />

            <button onClick={()=>doTransaction1(item._id)} className=' btn btn-primary form form-control'>Send Ethers</button>
          </div>

        </div>
       })}

    </div >
  )
}

export default Test