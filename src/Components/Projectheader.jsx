import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Basic from '../Components/Basic'
import Milestones from './MileStones';
import Payement from './Payement';
import Rewards from './Rewards';
import Story from './Story';
import Preview from './Preview';
import Nextheader from './Nextheader';


function Projectheader() {

    const [navBarCol, setnavBarCol] = useState({ prev: "1", curr: "1" })
    const [basicState, setBasicState] = useState({ title: "", subTitle: "", image: "", fundingGoals: "", subCatagory: "", catagory: "", story: "", risks: "" })
    const [addMiles, setAddMiles] = useState([])
    const [rewardList, setRewardList] = useState([])



    const addMileStone1 = (e, addMiles1) => {
        e.preventDefault();
        setAddMiles([...addMiles, addMiles1])
    }

    const changeButton = (index, e) => {
        const { value, name } = e.target
        const list = [...addMiles]
        list[index][name] = value
        setAddMiles(list)
        console.log(index)
    }




    const handleChange = (event) => {
        setnavBarCol({ curr: event.target.name, prev: event.target.name })
    }

    const handleChanges = (value, name) => {
        setBasicState({ ...basicState, [name]: value })
    }

    return (
        <>
            <Nextheader navBarCol={navBarCol} setnavBarCol={setnavBarCol} />
            <br />

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

            {navBarCol.curr === "1" ? <Basic handleChanges={handleChanges} basicState={basicState} /> : null}
            {navBarCol.curr === "2" ? <Story handleChanges={handleChanges} basicState={basicState} /> : null}
            {navBarCol.curr === "3" ? <Milestones addMiles={addMiles} setAddMiles={setAddMiles} addMileStone1={addMileStone1} changeButton={changeButton} /> : null}
            {navBarCol.curr === "4" ? <Rewards setRewardList={setRewardList} rewardList={rewardList} /> : null}
            {navBarCol.curr === "5" ? <Payement /> : null}
            {navBarCol.curr === "7" ? <Preview basicState={basicState} addMiles={addMiles} /> : null}

            <br />
            <br />
        </>
    )
}

export default Projectheader