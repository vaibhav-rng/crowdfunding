import React ,{useEffect,useState}from 'react'
import Web3 from 'web3'
import axios from 'axios'



const Test2 = () => {
  const[account,setAccount]=useState()
 

  const load = async () => {
    try{
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
      const accounts = await web3.eth.requestAccounts()
      setAccount(accounts[0]);  

      axios.post('http://localhost:8000/wallet', { wallet: accounts[0] })
      .then(()=>{alert("Done :)")})
      .catch(()=>{alert("Not Done :(")})


    }
    catch(error){
      console.log("error")
    }
   



  } 

  useEffect(() => {
    
  load()

  }, [])

  
  return (
    <div>
      {account}
      {/* <button onClick={() => web3.eth.requestAccounts()}>Request Wallet</button> */}
    </div>
  )

}

export default Test2