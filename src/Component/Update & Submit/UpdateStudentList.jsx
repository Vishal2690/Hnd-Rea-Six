import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContextData from '../ContextAPI';
import Nav from '../Nav';

const UpdateStudentList = () => {
    const dataContext = useContext(ContextData)
    const index = useLocation().state.data;
    const navi = useNavigate();
    const updateData = {
        name: dataContext.entries[index].name,
        Age: dataContext.entries[index].Age,
        Course: dataContext.entries[index].Course,
        Batch: dataContext.entries[index].Batch,
    }
    const handleChange = (e) => {
        updateData[e.target.name] = e.target.value
        updateData[e.target.Age] = e.target.value
        updateData[e.target.Course] = e.target.value
        updateData[e.target.Batch] = e.target.value
    }
    const OnUpdate = () => {
        dataContext.entries[index] = updateData;
        navi('/student')
    }
    const closePage = () => {
        navi('/student')
    }
    return (
        <div>
            <Nav />
            <div className='Main'>

                <div className='sub-main'>
                    <fieldset>
                        <label>Name</label>
                        <input type="text" className='or' name='name' placeholder={dataContext.entries[index].name} onChange={handleChange} />
                    </fieldset>
                    <fieldset>
                        <label>Age</label>
                        <input type="number" name='Age' placeholder={dataContext.entries[index].Age} onChange={handleChange} />
                    </fieldset>
                    <fieldset>
                        <label>Course</label>
                        <input type="text" name='Course' placeholder={dataContext.entries[index].Course} onChange={handleChange} />
                    </fieldset>
                    <fieldset>
                        <label>Batch</label>
                        <input type="text" name='Batch' placeholder={dataContext.entries[index].Batch} onChange={handleChange} />
                    </fieldset>
                </div>
                <div className='btn'>
                    <button onClick={closePage}>Cancle</button>
                    <button onClick={OnUpdate}>Update</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateStudentList