import React, {Fragment,useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { deleteTodo, updateTodo } from '../action/actions';
import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Update = () => {
    let { id } = useParams();
    console.log(id);
    
    const dispatch=useDispatch();
    const [itemToUpdate,setItemToUpdate]=useState({});
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [status, setStatus]=useState('Upcoming');
    const todos=useSelector((state)=>{
        return state.todo?.todo});

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
        event.preventDefault();
        let axiosR= await axios.put(`${process.env.REACT_APP_SERVER_URL}/todo/update`,{...itemToUpdate,name,status,description});
        if(axiosR.status===200) {
        dispatch(updateTodo(axiosR.data));

        }
    }

    useEffect(()=>{
        console.log('.....');
        const itemToUpdate=todos?.filter((item)=>item._id==id)[0];
        console.log(itemToUpdate);
        setItemToUpdate(itemToUpdate);
        setName(itemToUpdate?.name);
        setDescription(itemToUpdate?.description);
        setStatus(itemToUpdate?.status);
    },[todos]); 

    return (
            <div className="p-5">
                <h3>Update a todo</h3>
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
                      <div className='p-1'>  <input type='radio' name="status" onChange={handleStatusChange} checked={`${status==='Upcoming'}`} value='Upcoming' /> Upcoming</div>
                      <div className="p-1"> <input type='radio' name="status" onChange={handleStatusChange} checked={`${status==='Done'}`}  value='Done'  /> Done</div>
                    </div >
                    <div className='form-group mt-2 flex flex-row gap-3'>
                        <button className='btn btn-warning'>Save</button>
                        <Link to="/" className='btn btn-warning'>List</Link>
                    </div>
                </form>
            </div>
        );

};

export default Update;