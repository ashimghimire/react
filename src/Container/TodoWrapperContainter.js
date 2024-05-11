import React, { useEffect, useState } from 'react';
import { listTodo} from '../action/actions';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

const TodoWrapperContainter = ({children}) => {
    const[err,setError]=useState(null);
    const dispatch = useDispatch();
    const[loading, setLoading]=useState(false);

   
    useEffect(()=>{
        const fetchAllTodos= async()=>{
            try {
            let axiosR=await axios.get(`${process.env.REACT_APP_SERVER_URL}/todo/list`);
            if(axiosR){
                console.log(axiosR.data);
                dispatch(listTodo(axiosR.data));
            }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAllTodos();
    },[])
    return (
        <div>
            {children}
        </div>
    );
};

export default TodoWrapperContainter;