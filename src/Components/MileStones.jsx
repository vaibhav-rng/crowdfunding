import React from 'react'
import { useState } from 'react'

function Milestones(props) {

    const [addMiles1, setAddMiles1] = useState({ title: "", desc: "", amount: "", time: "", btn: false })
    const [toggele, settoggle] = useState(false)



    const addMileStone = (e) => {
        const { name, value } = e.target
        e.preventDefault();
        setAddMiles1({ ...addMiles1, [name]: value })
        if(name=="title1")
        {
            setAddMiles1({ btn: false })
        }
        
    }

    const deleteHandel =(e,index)=>
    {
        const list = [...props.addMiles]
        list.splice(index,1)
        props.setAddMiles(list)
    }

    const changeButton = (e, index) => {
        const { value, name } = e.target
        const list = [...props.addMiles]

        if (name === "btn") {
            list[index]["btn"] = false
        }
        else if (name === "btn1") {
            list[index]["btn"] = true
        }
        else {
            list[index][name] = value
        }
        props.setAddMiles(list)
    }

    return (
        <>
            <div className=' text-center'>
                <h2>Set your project's Milestones</h2>
                <p className=' text-muted'>Milestones are tools used in project management to mark specific points along a project timeline.</p>
                <p className=' text-muted'>It will help your project investers to have some control over the funds they invested.</p>
            </div>



            {toggele === false ?
                <div onClick={() => settoggle(!toggele)} className=' d-flex justify-content-center'>
                    <div style={{ height: "60px" }} className=' btn btn-dark container rounded-0'>
                        <button className='btn text-white border-0'><h4>+ add a milestone</h4></button>
                    </div>
                </div>
                : null}

            {props.addMiles.length >= 1 ?

                <div className=' text-center'>
                    <br />

                    <div className="progress bg-primary  border-0  rounded-0" style={{ height: "25px" }}>
                        {props.addMiles.map((item, index) => {
                            return <div key={index} className="progress-bar border-left border-bottom border-top" style={{ width: item.amount + "%", borderWidth: "medium", borderStyle: "solid" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> {item.title}</div>
                        })}
                        {/* <div class="progress-bar bg-success" style={{width:"25%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
                    </div>
                    <br />
                </div>
                : null}

            {props.addMiles.map((item, index) => <div key={index}>
                <div className=' d-flex justify-content-center'>
                    <div className="card col-7">
                        <div className="card-header bg-transparent d-flex justify-content-between ">
                            <div>

                            </div>
                            {/* {item.btn === false
                                ? <h5><span className='badge badge-light'>{item.time}</span></h5>
                                : <input className=' form-control' type="datetime-local" name='time' onChange={(e) => changeButton(e, index)} value={item.title} />
                            } */}


                            {item.btn === false
                                ? <h5 className=''>{item.title}</h5>
                                : <input className=' form-control' type="text" name='title' onChange={(e) => changeButton(e, index)} value={item.title} />
                            }

                            {item.btn === false
                                ? <h5><span className="badge rounded-0  px-4 badge-secondary"> {item.amount} %</span></h5>
                                : <input className=' form-control' type="number" name='amount' onChange={(e) => changeButton(e, index)} value={item.amount} />
                            }


                        </div>
                        <div className="card-body">
                            {item.btn === false
                                ? <p className="text-monospace card-text">{item.desc}</p>
                                : <textarea className=' form-control' type="text" rows="5"  name='desc' onChange={(e) => changeButton(e, index)} value={item.desc} />
                            }
                            <a onClick={(e)=>deleteHandel(e,item.index)} className="float-right col-2 btn btn-danger  rounded-0">Delete</a>

                            {item.btn === true ?
                                <button name="btn" onClick={(e) => changeButton(e, index)} className=" float-right col-2 btn btn-success rounded-0">Save</button>
                                : <button name="btn1" onClick={(e) => changeButton(e, index)} className=" float-right col-2 btn btn-primary rounded-0">Edit</button>}
                        </div>
                    </div>
                </div>
            </div>)}
            <hr />

            {toggele === true ?
                <div >
                    <div className=' d-flex justify-content-center'>
                        <div className='form-group'>
                            <label className='col-4' htmlFor="titleMilestone">Title</label>
                            <input name="title" onChange={(e) => addMileStone(e)} style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of Milestone' id="titleMilestone" type="text" />
                        </div>
                    </div>

                    <hr />

                    <div className=' d-flex justify-content-center'>
                        <div className='form-group'>
                            <label className='col-4' htmlFor="titleMilestone">Description</label>
                            <textarea name="desc" onChange={(e) => addMileStone(e)} style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of Milestone description' id="titleMilestone" type="text" />
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-around'>
                        <div className=' container'>
                            <h4>Milestone Percentage</h4>
                            <p className='text-muted col-9'>Set the percentage of fund you need to complete this milestone.</p>
                            <p className=' text-danger'>Milestone percentage should not exceed total 100% of funds.</p>

                        </div>
                        <div className=' container'>
                            <div className="input-group ">
                                <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                                    <option value="">Percent</option>
                                </select>
                                <input name="amount" onChange={(e) => addMileStone(e)} type="text" className="form-control col-9" />
                            </div>
                        </div>
                    </div>
                    {/* <hr /> */}
                    {/* <div className='d-flex justify-content-around'>
                        <div className=' container'>
                            <h4>Time</h4>
                            <p className='text-muted col-9'>Set time to complete this milestone. It's better to deliver to backers ahead of schedule than behind.</p>
                        </div>
                        <div className=' container'>
                            <div className="input-group ">

                                <input name="time" onChange={(e) => addMileStone(e)} type="datetime-local" className="form-control col-9 text-center" />
                            </div>
                        </div>
                    </div> */}

                    <br />

                    <div className=' d-flex justify-content-center'>
                        <div>
                            <button name='title1' value="hh" onClick={(e) => { props.addMileStone1(e, addMiles1); settoggle(!toggele); addMileStone(e)}} style={{ width: "30rem" }} className=' btn btn-success'>ADD</button>
                        </div>
                    </div>
                    <br />

                </div>
                : null}
        </>
    )
}

export default Milestones