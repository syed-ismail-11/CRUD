import { useState} from "react"
import React from 'react'
import axios from "axios"
import "./Home"
import { useLocation, useNavigate } from "react-router-dom";

const Update = (props) => {
  const [input, setInput] = useState({
    id:"",
    name:"",
    age:"",
    course:"",
    year:""
  });
  console.log("This are the Props: " + props)


  const navigate = useNavigate()
  const location = useLocation()
  const studentId = location.pathname.split("/")[2]

  const handleChange =(e)=>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/newstudents/" + studentId, input)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleCancel = async e =>{
    e.preventDefault()
      navigate('/')
  }
  return (
  <div className='form'>
    <h1>Update Student Data</h1>
    <input type="number" placeholder='Id'   onChange={handleChange} name="id" />
    <input type="text"  placeholder='Name' onChange={handleChange} name="name" />
    <input type="number" placeholder='Age'  onChange={handleChange} name="age" />
    <input type="text" placeholder='Course' onChange={handleChange} name="course" />
    <input type="number" placeholder='Year' onChange={handleChange} name="year" />
  <button className="formBtn" onClick={handleClick}>Update</button>
  <button className="formBtn" onClick={handleCancel}>Cancel</button>
  </div>
  )
}

export default Update