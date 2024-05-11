import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useDispatch } from 'react-redux';
import { deleteTodo } from '../action/actions';
import { Link } from 'react-router-dom';


const List = () => {
    const dispatch=useDispatch();

    const todos=useSelector(state=> {
        return state.todo?.todo});
        
    const deleteItem= async (item)=>{
        console.log(item);
        let axiosR= await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todo/delete?id=${item._id}`);
        if(axiosR.status===200)
        dispatch(deleteTodo(axiosR.data));
    }
    return (
        <div className='container mx-auto'>
            <div className='d-flex flex-row w-full mt-10'><h3 className='basis-4/5'>List todos</h3><Link 
            to="/add"
            className='basis-1/5 text-white justify-items-end btn btn-info'>Add Todo</Link></div>
            <table  className='table table-fixed mt-3'>
            <tbody> 
                {todos?.map(item=>{
                    return <tr key={item._id}><td><span className={`${item.status=='Done'?'line-through':''}`}>{item?.name}</span></td>
                            <td><button className='btn btn-danger basis-1/3' aria-label="delete" onClick={()=>deleteItem(item)} >Delete</button> &nbsp;
                            <Link className='btn btn-warning' aria-label="update" to={`/update/${item._id}`} >Update</Link>
                            </td>
                            </tr>
                    
                })}
                </tbody>
                </table>
            
        </div>
    );
};

export default List;