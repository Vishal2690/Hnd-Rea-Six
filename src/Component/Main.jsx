import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import Error from './Error'
import AddNewList from './Update & Submit/AddNewList'
import UpdateStudentList from './Update & Submit/UpdateStudentList'
import ContextData from './ContextAPI'


function Main() {
  const [data, setData] = useState([
    { name: "Pewp", Age: 20, Course: "MERN", Batch:"October" },
    { name: "Pewp", Age: 20, Course: "MERN", Batch:"October" },
    { name: "Pewp", Age: 20, Course: "MERN", Batch:"October" },
    { name: "Pewp", Age: 20, Course: "MERN", Batch:"October" },
    { name: "Pewp", Age: 20, Course: "MERN", Batch:"October" },
  
  ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Student" element={
            <ContextData.Provider value={{ entries: data, updateData: setData }}>
              <Student />
            </ContextData.Provider>
          } />
          <Route path='/addNewList' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <AddNewList />
          </ContextData.Provider>
          }/>
          <Route path='/updateStudentList' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <UpdateStudentList />
          </ContextData.Provider>
          }/>
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default Main