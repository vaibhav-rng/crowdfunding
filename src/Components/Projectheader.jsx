import React from 'react'
import { useState ,useContext} from 'react';
import { Link } from 'react-router-dom'
import Basic from '../Components/Basic'
import Milestones from './MileStones';
import Payement from './Payement';
import Rewards from './Rewards';
import Story from './Story';
import Preview from './Preview';
import Nextheader from './Nextheader';
import Web3 from 'web3'
import { address, abi } from '../config'
import Axios from 'axios'
import AuthContext from '../context/AuthContext'




function Projectheader() {

    const [navBarCol, setnavBarCol] = useState({ prev: "1", curr: "1" })
    const [basicState, setBasicState] = useState({ title: "", subTitle: "", image: "", fundingGoals: "", subCatagory: "", catagory: "", story: "", risks: "" ,myFile:""})
    const [addMiles, setAddMiles] = useState([])
    const [rewardList, setRewardList] = useState([])
    const [test,setTest]=useState()
    const [account, setAccount] = useState()
    const [toggle,setToggle]=useState(true)


    const { id } = useContext(AuthContext)





    const fileToBase64=(file)=>{
            return new Promise((resolve,reject)=>{
                const fileReader=new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload=()=>{
                    resolve(fileReader.result)
                }
                fileReader.onerror=(error)=>{
                    reject(error)
                }
            })
    }
    
    const setToBase64=async()=>{
        const Ether = Web3.utils.toWei(basicState.fundingGoals, 'ether');

        let amount=0;

        addMiles.map((item)=>amount +=parseInt(item.amount))

        if(amount==100)
        {
        Axios.post("http://localhost:8000/projects",{
            id:id,
            title:basicState.title,
            subtitle:basicState.subTitle,
            fundingGoals:Ether,
            desc:basicState.story,
            risk:basicState.risks,
            milestones:addMiles,
            rewards:rewardList,
            myFile:test,
            account:account

        }).then(() => {
            alert("done")
        }).catch(() => {
            alert("not done")
        })}
        else{
            alert("Please Make sure Milestone is equal to 100 %")
        }

    }


    const onClickhandler = (e) => {
        e.preventDefault()
        setToBase64()
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
 


        
    }



    const doTransaction = async () => {
        const milesArray = []

        for (const i of addMiles) {
            milesArray.push(parseInt(i.amount))

        }
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
        
        const createProject = new web3.eth.Contract(abi, address)
        await createProject.methods.createProject(basicState.title, milesArray).send({ from: account })

    }

    // const doTransaction = async () => {
    //     

    //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    //     // web3.eth.sendTransaction({from:account,to:address1,value:1000000000000000000})
    //     const createProject = new web3.eth.Contract(abi, address)
    //     const accounts = await web3.eth.requestAccounts();

    //     const test1 = await createProject.methods.projects(accounts[0], milesArray).call()


    //     console.log(test1)




    // }





    const addMileStone1 = (e, addMiles1) => {
        e.preventDefault();
        setAddMiles([...addMiles, addMiles1])
    }

    const changeButton = (index, e) => {
        const { value, name } = e.target
        const list = [...addMiles]
        list[index][name] = value
        setAddMiles(list)
    }




    const handleChange = (event) => {
        setnavBarCol({ curr: event.target.name, prev: event.target.name })
    }

    const handleChanges = (value, name) => {
        setBasicState({ ...basicState, [name]: value })     
    }

    const imageHandle=async(value)=>{
        const base64=await fileToBase64(value)
        setTest(base64)
    }

    return (
        <>
            {/* <button onClick={() => { }}>console log</button> */}
            <Nextheader navBarCol={navBarCol} onClickhandler={onClickhandler} doTransaction={doTransaction} setnavBarCol={setnavBarCol} />
            <br />
            {basicState.photo}

            {navBarCol.curr === "7" ? null :
                <div className=" container">
                    <nav style={{ backgroundColor: "#F9F9F9" }} className=" rounded p-0 navbar navbar-expand-sm navbar-light  d-flex justify-content-around">

                        <div className={`${navBarCol.curr === "1" || navBarCol.curr === "0" ? "border-success" : "border-0"} navbar-nav font border-bottom   px-4`}>
                            <Link name="1" className="nav-item nav-link active" onClick={(event) => { handleChange(event) }} >Basic</Link>
                        </div>
                        <div className={`${navBarCol.curr === "2" ? "border-success" : "border-0"} navbar-nav border-bottom   px-4`}>
                            <Link name="2" className="nav-item nav-link active" onClick={(event) => handleChange(event)} >Story</Link>
                        </div>
                        <div className={`${navBarCol.curr === "3" ? "border-success" : "border-0"} navbar-nav border-bottom px-4`}>
                            <Link name="3" className="nav-item nav-link active" onClick={(event) => handleChange(event)} >Milestones</Link>
                        </div>
                        <div className={`${navBarCol.curr === "4" ? "border-success" : "border-0"} navbar-nav border-bottom   px-4`}>
                            <Link name="4" className="nav-item nav-link active" onClick={(event) => handleChange(event)} >Rewards</Link>
                        </div>
                        <div className={`${navBarCol.curr === "5" ? "border-success" : "border-0"} navbar-nav border-bottom   px-4`}>
                            <Link name="5" className="nav-item nav-link active" onClick={(event) => handleChange(event)} >Payment</Link>
                        </div>

                    </nav>
                </div>
            }
            <br />

            {navBarCol.curr === "1" ? <Basic imageHandle={imageHandle} handleChanges={handleChanges} basicState={basicState} /> : null}
            {navBarCol.curr === "2" ? <Story handleChanges={handleChanges} basicState={basicState} /> : null}
            {navBarCol.curr === "3" ? <Milestones addMiles={addMiles} setAddMiles={setAddMiles} addMileStone1={addMileStone1} changeButton={changeButton} /> : null}
            {navBarCol.curr === "4" ? <Rewards setRewardList={setRewardList} rewardList={rewardList} /> : null}
            {navBarCol.curr === "5" ? <Payement toggle={toggle} setToggle={setToggle} setAccount={setAccount} /> : null}
            {navBarCol.curr === "7" ? <Preview test={test}  setTest={setTest} basicState={basicState} addMiles={addMiles} rewards={rewardList} /> : null}

            <br />
            <br />
        </>
    )
}

export default Projectheader