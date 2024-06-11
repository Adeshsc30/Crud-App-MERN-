import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then(result => {console.log(result) 
                navigate('/')})
        .catch(err => console.log(err))
    }
  return (
    <div>
        <form onSubmit={Submit}>
        <h1>Create User</h1>
      <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
