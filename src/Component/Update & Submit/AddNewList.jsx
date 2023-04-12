import React, { useContext } from 'react'
import ContextData from '../ContextAPI'
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';

const AddNewList = () => {
    const data = useContext(ContextData);
    const nav = useNavigate();
    const newStudentAdd = {
        name: "",
        Age: "",
        Course: "",
        Batch: ""
    }
    const handleChange = (e) => {
        newStudentAdd[e.target.name] = e.target.value
        newStudentAdd[e.target.Age] = e.target.value
        newStudentAdd[e.target.Course] = e.target.value
        newStudentAdd[e.target.Batch] = e.target.value
    }
    const OnSubmited = () => {
        data.entries.push(newStudentAdd);
        nav('/student')
    }
    const exitPage = () => {
        nav('/student')
    }
    return (
        <div>
            <Nav />
            <div className='Main'>

                <div className='sub-main'>
                    <fieldset>
                        <label>Name</label>
                        <input type="text" name='name' onChange={handleChange} />
                    </fieldset>
                    <fieldset>
                        <label>Age</label>
                        <input type="number" name='Age' onChange={handleChange} />
                    </fieldset>

                    <fieldset>
                        <label>Course</label>
                        <input type="text" name='Course' onChange={handleChange} />
                    </fieldset>

                    <fieldset>
                        <label>Batch</label>
                        <input type="text" name='Batch' onChange={handleChange} />
                    </fieldset>
                </div>
                <div className='btn'>
                    <button onClick={exitPage}>Cancle</button>
                    <button onClick={OnSubmited}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewList