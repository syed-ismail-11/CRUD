import { useState } from "react"
import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Add = () => {
  const [input, setInput] = useState({
    id:"",
    name:"",
    age:"",
    course:"",
    year:""
})

  const navigate = useNavigate()

  const handleChange =(e)=>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/newstudents",input)
      navigate('/')
      console.log(input)
    } catch (error) {
      console.log(error)
    }
  }
  const handleCancel = async e =>{
    e.preventDefault()
      navigate('/')
  }


  console.log(input)
  return (
    <div className='form'>
      <h1>Add New Student</h1>
      <input type="number" placeholder='Id'   onChange={handleChange} name="id" />
      <input type="text" placeholder='Name'   onChange={handleChange} name="name" />
      <input type="number" placeholder='Age'  onChange={handleChange} name="age" />
      <input type="text" placeholder='Course' onChange={handleChange} name="course" />
      <input type="number" placeholder='Year' onChange={handleChange} name="year" />
      <button className="formBtn" onClick={handleClick}>Add</button>
      <button className="formBtn" onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default Add