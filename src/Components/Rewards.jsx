import React from 'react'
import { useState } from 'react'

function Rewards(props) {

  const [reward, setRewards] = useState({ title: "", description: "", amount: "", shipping: "", voting: "" ,btn:false})

  const onChange = (e) => {
    const { value, name } = e.target
    setRewards({ ...reward, [name]: value })
    if(name=="title1")
    {
     setRewards({ ...reward,btn: false })
    }

  }

  const onClickRewards = () => {
    props.setRewardList([...props.rewardList, reward])
  }

  const changeButton=(e, index)=>
  {
    const {name,value}=e.target
    const list=[...props.rewardList]

    if(name==="btn")
    {
      list[index]["btn"]=false
    }
    else if(name==="btn1")
    {
      list[index]["btn"]=true
    }
    else
    {
      list[index][name]=value
    }
    props.setRewardList(list)
  }
  
  const deleteHandel=(e,index)=>
  {
    const list=[...props.rewardList]
    list.splice(index,1)
    props.setRewardList(list)

  }




  return (
    <>
      {props.rewardList.map((item, index) => <div key={index}>
        <div className=' d-flex justify-content-center'>
          <div className="card col-7">
            <div className="card-header bg-transparent d-flex justify-content-between ">

              {item.btn === false
                ? <h5><span className='badge badge-light'>{item.voting}</span></h5>
                : <input className=' form-control' type="datetime-local" name='time' onChange={(e) => changeButton(e, index)} value={item.title} />
              }


              {item.btn === false
                ? <h5 className=''>{item.title}</h5>
                : <input className=' form-control' type="text" name='title' onChange={(e) => changeButton(e, index)} value={item.title} />
              }

              {item.btn === false
                ? <h5><span className="badge badge-secondary">btc {item.amount}</span></h5>
                : <input className=' form-control' type="number" name='amount' onChange={(e) => changeButton(e, index)} value={item.amount} />
              }


            </div>
            <div className="card-body">
              {item.btn === false
                ? <p className="card-text">{item.description} With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.</p>
                : <textarea className=' form-control' type="text" rows="5" name='description' onChange={(e) => changeButton(e, index)} value={item.description} />
              }
              <a onClick={(e) => deleteHandel(e, item.index)} className="float-right col-2 btn btn-danger">Delete</a>

              {item.btn === true ?
                 <button name="btn" onClick={(e) => changeButton(e, index)} className=" float-right col-2 btn btn-success">Save</button> 
                 : <button name="btn1" onClick={(e) => changeButton(e, index)} className=" float-right col-2 btn btn-primary">Edit</button>} 
            </div>
          </div>
        </div>
      </div>)}



      <div className=' text-center'>
        <h2>Add a reward</h2>
        <p className=' text-muted'>Offer tangible or intangible things that bring backers closer to your project.</p>
      </div>


      <div >
        <div className=' d-flex justify-content-center'>
          <div className='form-group'>
            <label className='col-4' htmlFor="reward">Title</label>
            <input name="title" onChange={(e) => onChange(e)} value={reward.title} style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of reward' id="reward" type="text" />
          </div>
        </div>

        <hr />

        <div className=' d-flex justify-content-center'>
          <div className='form-group'>
            <label className='col-4' htmlFor="rewardDes">Description</label>
            <textarea name="description" onChange={(e) => onChange(e)} value={reward.description} style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of reward Description' id="rewardDes" type="text" />
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-around'>
          <div className=' container'>
            <h4>Reward Amount</h4>

          </div>
          <div className=' container'>
            <div className="input-group ">
              <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                <option value="">btc</option>
                <option value="">etc</option>
              </select>
              <input name="amount" onChange={(e) => onChange(e)} value={reward.amount} type="text" className="form-control col-9" />
            </div>
          </div>
        </div>
        <hr />

        <div className=' d-flex justify-content-center'>
          <div>
            <h4 className=' text-center'>Shipping</h4>
            <div>
              <input name="shipping" value={reward.shipping} style={{ display: "none" }} type="radio" class="btn-check" id="success-outlined" autocomplete="off" checked />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="success-outlined">Ships to anywhere in the world</label>
            </div>
            <div>
              <input name="shipping" value={reward.shipping} style={{ display: "none" }} type="radio" class="btn-check" id="danger-outlined" autocomplete="off" />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="danger-outlined">Local pickup, event, or service (no shipping)  </label>
            </div>
            <div>
              <input name="shipping" value={reward.shipping} style={{ display: "none", width: "100px" }} type="radio" class="btn-check" id="danger-outlined" autocomplete="off" />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="danger-outlined">Digital reward (no shipping)</label>
            </div>
          </div>
        </div>

        <hr />

        <div className='d-flex justify-content-around'>
          <div className=' container'>
            <h4>Voting right</h4>

          </div>
          <div className=' container'>
            <div className="input-group ">
              <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
              <input name="voting" onChange={(e) => onChange(e)} value={reward.voting} type="number" className="form-control col-9" />
            </div>
          </div>
        </div>

        <br />
        <br />

        {reward.voting}
        <div className=' d-flex justify-content-center'>
          <div>
            <button name="title1" onClick={(e)=>{onClickRewards(e);onChange(e)}} style={{ width: "30rem" }} className=' btn btn-success'>Add Reward</button>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Rewards