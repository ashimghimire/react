import {ADD_TODO, UPDATE_TODO, LIST_TODO,DELETE_TODO} from "./types";

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: task,
    };
};

export const updateTodo = (value) => {
    return {
        type: UPDATE_TODO,
        payload: value,
    };
};

export const listTodo = (value) => {
    return {
        type: LIST_TODO,
        payload: value,
    };
};

export const deleteTodo = (value) => {
    return {
        type: DELETE_TODO,
        payload: value,
    };
};