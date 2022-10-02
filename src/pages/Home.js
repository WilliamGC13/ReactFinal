import { useState, useEffect } from 'react'
import React from "react"
import Form from "./Form";
import UpdateForm from "./UpdateForm";
// import UserForm from "./UserForm";
import Clock from "../components/Clock"
import Container from "react-bootstrap/Container"




function Home() {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
      const res = await fetch(`https://631d0cc6cc652771a480b5b0.mockapi.io/users`)
      const data = await res.json()
      setUsers(data)
      console.log('rendering')
    }
  
    const deleteUser = async (id) => {
      const res = await fetch(`https://631d0cc6cc652771a480b5b0.mockapi.io/users/${id}`, {
        method: 'DELETE'
      })
      console.log(res)
    }
  

    useEffect(() => {

      fetchUsers()

      const interval=setInterval(() =>{
      fetchUsers()
    }, 3000)

       return() => clearInterval (interval)

    }, [])




    return(
      <Container>
        <div className="Home">
          <br></br>
       <h5><Clock /></h5>
        {/* <UserForm /> */}
        <Form />
        <UpdateForm />
        {users.map(user => <p key={user.id} onClick={() => deleteUser(user.id)}>Username: {user.name} <br></br> Email: {user.email}<br></br> ID: {user.id}</p>)}
      </div>
      </Container>
   )
}

export default Home