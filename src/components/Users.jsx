import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';

const Users = () => {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState("online");

    useEffect(()=>{
       const url="https://jsonplaceholder.typicode.com/users"

       fetch(url).then((res)=>{
           res.json().then((result)=>{
            setData(result)
            localStorage.setItem("users", JSON.stringify(result))
            setMode('online')
           })
       }).catch((error)=>{
         console.log('error', error)
        const getUsers = localStorage.getItem("users")
        setData(JSON.parse(getUsers))
        setMode('offline')
       }) 

    },[])

  return (
    <div>
      {
        mode==='offline'?
      <div className="alert alert-warning" role="alert">
        You are in Offline mode
      </div>:null
      }
    <Table striped bordered hover variant="ligth">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item)=> (
              <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address?.city}</td>
              </tr>
          )
      )}
    </tbody>
  </Table></div>
  )
}

export default Users