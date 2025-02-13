import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const Users = () => {
    const[users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result=> setUsers(result.data))
    .catch(err=> console.log(err))
 },[])

    const handleDelete=(id)=>{
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res=>{console.log(res)
            window.location.reload()
      })
      .catch(err=> console.log(err))
    }
  return (
    <div>
        <table>
        <Link to="/create"> Add+ </Link>
      <thread>
        <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Age</th>
         <th>Action</th>
        </tr>
      </thread>
      <tbody>
            {
                users.map((user)=>{
                    return(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                        <Link to={`/update/${user._id}`}> Edit </Link>
                        <button onClick={(e)=>handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>)
                })
            }
      </tbody>
      </table>
    </div>
  )
}

export default Users
