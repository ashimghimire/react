import {ADD_TODO, UPDATE_TODO, LIST_TODO,DELETE_TODO} from "../action/types";

const initialState = {
    todo: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let list=Object.assign([],state.todo);
            list.push(action.payload);
            return {
                ...state,
                todo:list 
            };
            case LIST_TODO:
            return {
                ...state,
                todo:action.payload
            };
            case UPDATE_TODO:
                let todo=Object.assign([],state.todo);
                let index=todo.findIndex((item)=>item._id===action.payload._id);
                todo[index]=action.payload;
                return {
                    ...state,
                    todo,
                }
            case DELETE_TODO:
                console.log(state.todo);
                let todoItems=state?.todo.filter((item)=>item._id!=action.payload._id);
                return {
                    ...state,
                   todo:todoItems,
                }
            default:
                return state;
    }
};

export default todoReducer;