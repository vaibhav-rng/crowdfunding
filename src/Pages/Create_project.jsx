import {React,useContext} from 'react'
import Projectheader from '../Components/Projectheader'
import AuthContext from '../context/AuthContext';
import LoginRegister from '../Components/LoginRegister';


const Create_project = () => {
  const { loggedIn } = useContext(AuthContext)
 

  return (
    <>
      {loggedIn === undefined?<LoginRegister route="/createProject"/>:<Projectheader/>}


    </>
  )
}

export default Create_project