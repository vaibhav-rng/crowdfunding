import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Web3 from 'web3'
import { address, abi } from '../config'





const BackingOfProject = () => {
    let { id } = useParams();
    const [rewards, setRewards] = useState([])
    const [amount, setAmount] = useState()
    const [wallet, setWallet] = useState()




    useEffect(async() => {
        axios.get(`http://localhost:8000/projects/${id}`)
            .then((response) => {
                setRewards(response.data.rget.rewards)
                console.log(response.data.rget.rewards)
            })
            .catch((err) => {
                console.log(err)
            })


    }, []);


    const payment=async(_amount)=>{
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
        const contract = new web3.eth.Contract(abi, address)
        const accounts = await web3.eth.requestAccounts();
        // const amount= web3.utils.fromWei(_amount, 'ether')
        let amount = web3.utils.toWei(_amount, 'ether')
        contract.methods.deposit().send({from:accounts[0],value: amount})
        .then( (receipt) => {
            console.dir(JSON.stringify(receipt.status))

            if(receipt.status)
            {
                postInvestor(amount)
            }

        })
        .catch(() => {
            alert("Error");
        });

    }

    const postInvestor=async(_amount)=>
    {
        
        axios.put(`http://localhost:8000/investors/${id}`,{amount:_amount})
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <br />
            <br />


            <div className=' d-flex justify-content-between'>
                <div className='w-50 text-monospace text-muted'>
                    Pledge custom amount of Ether without any rewards.

                </div>
                <div></div>
                <div className=' d-flex col-5'>
                    <input value={amount} name="amount"  onChange={(e)=>setAmount(e.target.value)} placeholder=' custom amount ' className=' text-monospace form-control col-8 ' type="text" />
                    <button onClick={()=>{payment(amount)}} className=' rounded-0 btn btn-success col-4 text-monospace'>Pledge</button>
                    
                </div>

            </div>
            <br />
            <hr />


            {rewards.map((items) =>
                <div className=' d-flex justify-content-center mb-2'>
                    <div style={{ backgroundColor: "#E8E8E8" }} className="card text-black-50  border-0 rounded-0 col-9">
                        <div className="card-body">
                            <h5 className="card-title text-dark text-center">{items.title}</h5>
                            <p className="card-text text-center">{items.desc}</p>
                            <br />
                            <div className=' d-flex justify-content-around'>
                                <button href="#" onClick={()=>payment(items.amount.toString())} class="btn rounded-0 col-3 btn-success text-monospace ">Pledge: {items.amount}</button>
                                <div href="#" class="btn rounded-0 col-3 btn-primary text-monospace">voting:yes</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}

export default BackingOfProject