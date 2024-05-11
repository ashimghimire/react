import React, { Fragment, useState } from 'react';
import { addTodo } from '../action/actions';
import axios from 'axios';
import {useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';

const Add = () => {
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [status, setStatus]=useState('Upcoming');

    const handleNameChange=(event)=>{
        event.preventDefault();
        setName(event.target.value);
    }
    const handleDescChange=(event)=>{
        event.preventDefault();
        setDescription(event.target.value);
    }
    const handleStatusChange=(event)=>{
        event.preventDefault();
        setStatus(event.target.value);
    }

    const handleSubmit= async(event)=>{
        console.log({name,description,status});
        event.preventDefault();
        let axiosR= await axios.post(`${process.env.REACT_APP_SERVER_URL}/todo/add`,{name,description,status});
        if(axiosR.status===200) {
        dispatch(addTodo(axiosR.data));
        setName('');
        setDescription('');
        setStatus('Upcoming');
        toast('Todo Successfully Added'); 
        }
        
    }

    return (
        <div className="p-5">
            <h3>Add a todo</h3>
            <form name="form1" className='col-sm-6' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="">Add Todo Text</label>
                    <input type='text' name="name" onChange={handleNameChange} value={name} className='form-control'/>
                </div>
                <div className='form-group mt-2'>
                <label htmlFor="">Add Todo description</label>
                    <input type='text' name="description" onChange={handleDescChange} value={description} className='form-control'/>
                </div>
                <div className='form-group mt-2'>
                  <div className='p-1'>  <input type='radio' name="status" onChange={handleStatusChange} value='Upcoming' defaultChecked  /> Upcoming</div>
                  <div className="p-1"> <input type='radio' name="status" onChange={handleStatusChange} value='Done'  /> Done</div>
                </div >
                <div className='form-group mt-2 flex flex-row gap-3'>
                    <button className='btn btn-warning'>Save</button>
                    <Link to="/" className='btn btn-warning'>List</Link>
                </div>
            </form>
        </div>
    );
};

export default Add;