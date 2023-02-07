import React, { useState , useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [newstudents,setNewstudents] = useState([])

  useEffect(() => {
    const fetchAllStudents = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/newstudents")
        console.log(res)
        setNewstudents(res.data)
      }catch(error) {
        console.log(error)
      }
    }
    fetchAllStudents()
  }, [])

  const handleDelete =async(id)=>{
    try {
      await axios.delete("http://localhost:8800/newstudents/"+id)
      alert("Do you want to delete this item?")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <div className='form'>
    <h1>Student Database</h1>
    <div className='students'>
     <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {newstudents.map((student)=>(
           <tr className='student' key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>
            <td>{student.year}</td>
            <td>
            <button className='update homeBtns'><Link to={`/update/${student.id}`}>Update</Link></button>
            <button className='delete homeBtns' onClick={()=>handleDelete(student.id)}>Delete</button>
            </td>
           </tr>
          ))}
      </tbody>
     </table>
        
    </div>
        <button className='formBtn'>
          <Link to="/add">Add new student</Link>
        </button>
    </div>
  )
}

export default Home