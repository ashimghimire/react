var {mongoose} = require('../db/mongoose');
var Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

var TodoSchema=new Schema({
	name:{
		type:String,
		required:true,
        unique:true, 
	},
	description:{
		type:String,
	},
    status:{
        type:String,
        enum:['Done','Upcoming'],
        default:'Upcoming',
        message: '{VALUE} is not supported'
    },
	date:{type: Date, default: Date.now },
		
});	

TodoSchema.plugin(mongoosePaginate);
TodoSchema.index({name:'text', description:'text', status:'text', place:'text'});
var todoModel=mongoose.model("projects", TodoSchema);

module.exports = {
	todoModel
}