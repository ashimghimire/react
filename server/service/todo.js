var mongoose=require('../db/mongoose');
var {todoModel}=require('../model/TodoSchema');

var getTodos= async ()=>{
	let query= await todoModel.find({});
    return query;
};

var addTodos= async (todo)=>{
	var newTodo = new todoModel(todo);
     let query= await newTodo.save();
     return query;
};

var updateTodo= async(todo)=>{
	let query= await todoModel.findOneAndUpdate({_id: todo._id}, {$set:todo}, {new: true});
    return query;
};

var deleteTodo= async (todo)=>{
	let query= await todoModel.findByIdAndDelete({_id: todo});
    return query;
};

module.exports = {
	getTodos,
    addTodos,
    updateTodo,
    deleteTodo
}