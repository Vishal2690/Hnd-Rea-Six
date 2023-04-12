// import React, { useState } from 'react'
import React, { useContext } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import ContextData from './ContextAPI'

function Student() {
  const dataContext = useContext(ContextData)
  const Navi = useNavigate();
  return (
    <div>
      <Nav />
      <div className='first-FlexContainer'>
        <h1>Student Details</h1>
        <button onClick={()=> {Navi('/addNewList')}}>Add new Student</button>
      </div>

      <div className='table'>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          </thead>
          <tbody>
          {dataContext.entries.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Age}</td>
                  <td>{ item.Course}</td>
                  <td>{ item.Batch}</td>
                  <td><Link to='/updateStudentList' state={{data:index}}>Edit</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Student


   