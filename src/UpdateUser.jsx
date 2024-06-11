import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {

  const {id} = useParams()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
         .then(result=> {console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)})
         .catch(err=> console.log(err))
  },[])

  const Update=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
    .then(result => {console.log(result) 
            navigate('/')})
    .catch(err => console.log(err))
}

  return (
    <div>
      <form onSubmit={Update}>
        <h1>Update User</h1>
<input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button>submit</button>    
      </form>
      </div>
  )
}

export default UpdateUser
